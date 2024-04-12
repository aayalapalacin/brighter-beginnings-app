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
          category: "Infant",
          age: "4 Weeks - 15 Months",
          start: 1,
          end: 15,
          img: "/programs_images/infant.png",
          color: "grass",
          price: "15.00/hr",
          description: "We'll take care",
          schedule: "Someday thru someday",
          staff: "Andres and alex",
        },
        {
          category: "Toddler",
          age: "16 Months - 2 Yrs",
          start: 16,
          end: 24,

          img: "/programs_images/toddler.png",
          color: "sky",
          price: "15.00/hr",
          description: "We'll take care",
          schedule: "Someday thru someday",
          staff: "Andres and alex",
        },
        {
          category: "Pre-School",
          age: "2 Yrs - 5 Yrs",
          start: 24,
          end: 60,
          img: "/programs_images/pre_school.png",
          color: "sun",
          price: "15.00/hr",
          description: "We'll take care",
          schedule: "Someday thru someday",
          staff: "Andres and alex",
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
        console.log(kidAgeInMonths);
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
