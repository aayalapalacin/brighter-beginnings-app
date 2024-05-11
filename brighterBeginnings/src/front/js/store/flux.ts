import { AccordionDataType } from "../component/Programs/ProgramType";

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
        accordion_title: "",
        childName: "",
        kidsAge: 0,
        age: "",
        start: 0,
        end: 0,
        img: "",
        bg_color: "",
        dropdownData: [
          {
            title: "",
            description: "",
            color: "",
          },
        ],
      },

      availablePrograms: [
        // Infant
        {
          accordion_title: "Infant Program Details",
          age: "6 Weeks - 15 Mo",
          start: 2,
          end: 15,
          img: "/programs_images/infant.png",
          bg_color: "grass",
          dropdownData: [
            {
              title: "Price",
              description: "$15/hr",
              color: "carrot",
            },
            {
              title: "Description",
              description: "We take care of infants",
              color: "sky",
            },
            {
              title: "Schedule",
              description: "Monday - Friday, 7:40am - 5pm",
              color: "grass",
            },
            {
              title: "Staff",
              description: "infant staff",
              color: "tree",
            },
          ],
        },
        // Toddler
        {
          accordion_title: "Toddler Program Details",
          age: "16 Mo - 2.9 Yrs",
          start: 16,
          end: 24,
          img: "/programs_images/toddler.png",
          bg_color: "sky",
          dropdownData: [
            {
              title: "Price",
              description: "$17/hr",
              color: "carrot",
            },
            {
              title: "Description",
              description: "We take care of toddlers",
              color: "sky",
            },
            {
              title: "Schedule",
              description: "Monday - Friday, 7:40am - 5pm",
              color: "grass",
            },
            {
              title: "Staff",
              description: "toddler staff",
              color: "tree",
            },
          ],
        },
        // Pre-schooler
        {
          accordion_title: "Pre-School Program Details",
          age: "2.9 Yrs - 5 Yrs",
          start: 25,
          end: 60,
          img: "/programs_images/pre_school.png",
          bg_color: "sun",
          dropdownData: [
            {
              title: "Price",
              description: "$18/hr",
              color: "carrot",
            },
            {
              title: "Description",
              description: "We take care of pre-schoolers",
              color: "sky",
            },
            {
              title: "Schedule",
              description: "Monday - Friday, 7:40am - 5pm",
              color: "grass",
            },
            {
              title: "Staff",
              description: "pre-schooler staff",
              color: "tree",
            },
          ],
        },
      ],
      philosophyData: [
        {
          accordion_title: "Philosophy",
          age: "",
          start: 0,
          end: 0,
          img: "/about_images/scroll.png",
          bg_color: "",
          dropdownData: [
            {
              title: "All Children are created equal",
              description: "all kids are equal no matter what",
              color: "carrot",
            },
            {
              title: "Love is the most important",
              description: "Where is the love, Love?",
              color: "sky",
            },
            {
              title: "It takes a village",
              description: "We are a community, yeah!",
              color: "grass",
            },
          ],
        },
      ],
    },
    actions: {
      handleChildProgramSubmit: async (
        e: React.FormEvent<HTMLFormElement>,
        firstName: string,
        yearsOld: string | any,
        monthsOld: string | any
      ) => {
        const store = getStore();

        e.preventDefault();
        // HANDLING WHEN INPUT FIELDS ARE EMPTY

        if (yearsOld === "") {
          yearsOld = 0;
        } else if (monthsOld === "") {
          monthsOld = 0;
        }
        // HANDLING WHEN INPUT FIELDS ARE EMPTY
        if (firstName.length < 2) {
          alert("Please provide full name");
        } else {
          // PARSING INPUTS TO INTEGERS
          const parsedYearsOld = Math.round(parseFloat(yearsOld));
          const parsedMonthsOld = Math.round(parseFloat(monthsOld));

          const updatedChildProgram = {
            firstName: firstName,
            yearsOld: parsedYearsOld,
            monthsOld: parsedMonthsOld,
          };
          // verifying kid's age
          const kidAgeInMonths = parsedMonthsOld + parsedYearsOld * 12;
          console.log(kidAgeInMonths, "kidsAge");
          //
          const matchingProgram = store.availablePrograms.find(
            (program: AccordionDataType) => {
              return (
                kidAgeInMonths <= program.end && kidAgeInMonths >= program.start
              );
            }
          );
          // Matching age to no program
          if (!matchingProgram) {
            alert("No program found for the given age.");
            return;
          }
          // Updating inputkidprogram
          const updatedInputKidProgram = {
            ...matchingProgram,
            childName: firstName,
            kidsAge: kidAgeInMonths,
          };

          const availablePrices: { age: string; price: any }[] =
            store.availablePrograms.map((program: AccordionDataType) => {
              const priceItem = program.dropdownData.find(
                (item) => item.title === "Price"
              );
              return {
                age: program.age,
                price: priceItem ? priceItem.description : "",
              };
            });

          // FINDING THE PRICE FOR THE CURRENT PROGRAM BASED ON THE AGE
          const currentProgramAge = updatedInputKidProgram.age;
          const currentProgramPrice = availablePrices.find(
            (item: { age: string; price: any }) =>
              item.age === currentProgramAge
          )?.price;
          const updatedInputKidProgramData = {
            ...updatedInputKidProgram,
            accordion_title: `${
              updatedInputKidProgram.childName
            }'s Program Details (${
              updatedInputKidProgram.accordion_title.includes("Toddler")
                ? "Toddler"
                : updatedInputKidProgram.accordion_title.includes("Infant")
                ? "Infant"
                : "Pre-School"
            })`,
            dropdownData: [
              {
                title: "Price",
                description: currentProgramPrice,
                color: "carrot",
              },
              {
                title: `${updatedInputKidProgram.childName}'s Description`,
                description: `We take care of ${updatedInputKidProgram.childName}`,
                color: "sky",
              },
              {
                title: `${updatedInputKidProgram.childName}'s Schedule`,
                description: "Monday - Friday, 7:40am - 5pm",
                color: "grass",
              },
              {
                title: `Staff caring for ${updatedInputKidProgram.childName}`,
                description: `${updatedInputKidProgram.childName}'s staff`,
                color: "tree",
              },
            ],
          };

          const updatedStore = {
            ...store,
            childProgram: updatedChildProgram,
            inputKidProgram: updatedInputKidProgramData,
          };

          setStore(updatedStore);
        }
      },

      deleteChildProgramInfo: () => {
        const store = getStore;

        const updatedStore = {
          ...store,
          childProgram: { firstName: "", yearsOld: "", monthsOld: "" },
        };

        setStore(updatedStore);
      },
    },
  };
};

export default getState;
