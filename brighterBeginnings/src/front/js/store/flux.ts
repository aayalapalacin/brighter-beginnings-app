import { KidType } from "../component/Programs/ProgramsAccordion";

interface GetStateParams {
  getStore: () => any;
  getActions: () => any;
  setStore: (updatedStore: any) => void;
}

const getState = ({ getStore, getActions, setStore }: GetStateParams) => {
  return {
    store: {
      test: "Andres",
      users: [],
      childProgram: { firstName: "", yearsOld: "", monthsOld: "" },
      inputKidProgram: {
        name: "",
        kidsAge: 0,
        category: "",
        age: "",
        start: 0,
        end: 0,
        img: "",
        color: "",
        price: "",
        description: "",
        schedule: "",
        staff: "",
      },
      availablePrograms: [
        {
          accordion_title: "Infant",
          age: "4 Weeks - 15 Mo",
          start: 1,
          end: 15,
          img: "/programs_images/infant.png",
          bg_color:"grass",
          dropdownData:[
            {
              title:"Price",
              description: "$15/hr",
              color: "carrot"
            },
            {
              title:"Description",
              description: "We take care of infants",
              color: "sky"
            },
            {
              title:"Schedule",
              description: "Monday - Friday, 7:40am - 5pm",
              color: "grass"
            },
            {
              title:"Staff",
              description: "infant staff",
              color: "tree"
            }
          ]
        },
        {
          accordion_title: "Toddler",
          age: "16 Mo - 2 Yrs",
          start: 16,
          end: 24,
          img: "/programs_images/toddler.png",
          bg_color:"sky",
          dropdownData:[
            {
              title:"Price",
              description: "$17/hr",
              color: "carrot"
            },
            {
              title:"Description",
              description: "We take care of toddlers",
              color: "sky"
            },
            {
              title:"Schedule",
              description: "Monday - Friday, 7:40am - 5pm",
              color: "grass"
            },
            {
              title:"Staff",
              description: "toddler staff",
              color: "tree"
            }
          ],
        },
        {
          accordion_title: "Pre-School",
          age: "2 Yrs - 5 Yrs",
          start: 24,
          end: 60,
          img: "/programs_images/pre_school.png",
          bg_color:"sun",
          dropdownData:[
            {
              title:"Price",
              description: "$18/hr",
              color: "carrot"
            },
            {
              title:"Description",
              description: "We take care of pre-schoolers",
              color: "sky"
            },
            {
              title:"Schedule",
              description: "Monday - Friday, 7:40am - 5pm",
              color: "grass"
            },
            {
              title:"Staff",
              description: "pre-schooler staff",
              color: "tree"
            }
          ],
        },
      ],
    },
    actions: {
      getUser: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "api/user");
          const data = await resp.json();
          setStore({ users: data });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading users from backend", error);
        }
      },

      handleChildProgramSubmit: (
        e: React.FormEvent<HTMLFormElement>,
        firstName: string,
        yearsOld: string | any,
        monthsOld: string | any
      ) => {
        const store = getStore();
        e.preventDefault();

        if (!store || !store.availablePrograms) {
          return console.error("Store or availablePrograms is undefined");
        }

        // PARSING INPUTS TO INTEGERS
        const parsedYearsOld = parseInt(yearsOld);
        const parsedMonthsOld = parseInt(monthsOld);

        const updatedChildProgram = {
          firstName: firstName,
          yearsOld: parsedYearsOld,
          monthsOld: parsedMonthsOld,
        };
        // verifying kid's age
        const kidAgeInMonths = parsedMonthsOld + parsedYearsOld * 12;
        console.log(store.availablePrograms);
        const matchingProgram = store.availablePrograms.find(
          (program: KidType) => {
            return (
              kidAgeInMonths <= program.end && kidAgeInMonths >= program.start
            );
          }
        );

        // Matching age to no program
        if (!matchingProgram) {
          console.error("No program found for the given age.");
          return;
        }

        // Updating inputkidprogram
        const updatedInputKidProgram = {
          ...matchingProgram,
          name: firstName,
          kidsAge: kidAgeInMonths,
        };

        const updatedStore = {
          ...store,
          childProgram: updatedChildProgram,
          inputKidProgram: updatedInputKidProgram,
        };

        setStore(updatedStore);
      },
    },
  };
};

export default getState;
