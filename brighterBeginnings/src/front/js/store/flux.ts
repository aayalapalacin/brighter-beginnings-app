import { AccordionDataType } from "../pages/programs";
import { generateDescription } from "../utils/generateProgramData";
import availablePrograms from "../../../data/programs"

interface GetStateParams {
  getStore: () => any;
  getActions: () => any;
  setStore: (updatedStore: any) => void;
}

const getState = ({ getStore, getActions, setStore }: GetStateParams) => {
  return {
    store: {
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

      availablePrograms: availablePrograms,
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
              "title": "Encouraging Individual Growth",
              "description": "We believe each individual child will unfold his or her personality and abilities in time. Our program encourages this unfolding in an environment that is rich in nurturing, understanding, and learning.",
              "color": "carrot"
            },
            {
              "title": "Comprehensive Learning Program",
              "description": "Brighter Beginnings Preschool/Child Care Center offers an independent early childhood program packed with educational experiences for young children. Our program promotes the physical, emotional, and intellectual development of children.",
              "color": "sky"
            },
            {
              "title": "Holistic Child Development",
              "description": "We carefully planned this program in such a way so as to enhance your child’s total development. Our program is based on monthly themes, webs, and emergent curriculum that encourage a wide variety of experiences and self-expression.",
              "color": "grass"
            }
          ]
          
        },
      ],
 
    },
    actions: {
     clearChildProgram: () => {
      
        setStore({ childProgram: { firstName: "", yearsOld: "", monthsOld: "" }});
    
}
,
      handleChildProgramSubmit: async (
        e: React.FormEvent<HTMLFormElement>,
        firstName: string,
        yearsOld: string | any,
        monthsOld: string | any
      ) => {
        const store = getStore();
          const firstCharUpper = firstName[0].toUpperCase()
          const allOtherChar = firstName.split(firstName[0])[1]
          const updatedFirstName = firstCharUpper + allOtherChar;

        e.preventDefault();
        // HANDLING WHEN INPUT FIELDS ARE EMPTY
        if (yearsOld === "") {
          yearsOld = 0;
        }
        if (monthsOld === "") {
          monthsOld = 0;
        }

        // PARSING INPUTS TO INTEGERS
        const parsedYearsOld = parseFloat(yearsOld);
        const parsedMonthsOld = parseFloat(monthsOld);

        const updatedChildProgram = {
          firstName: updatedFirstName,
          yearsOld: parsedYearsOld,
          monthsOld: parsedMonthsOld,
        };
        // verifying kid's age
        const kidAgeInMonths = parsedMonthsOld + parsedYearsOld * 12;
        //
        const matchingProgram = store.availablePrograms.find(
          (program: AccordionDataType) => {
            return (
              kidAgeInMonths <= program.end && kidAgeInMonths >= program.start
            );
          }
        );

        // Updating inputkidprogram
        const updatedInputKidProgram = {
          ...matchingProgram,
          childName: updatedFirstName,
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

         let updatedProgramSchedule = updatedInputKidProgram.accordion_title.includes("Toddler") ? "toddler schedule" : updatedInputKidProgram.accordion_title.includes("Pre") ? "preschool schedule" : "During intake, parents and the infant’s educator will write up a schedule altered to that particular infant. Infant schedules are individual and may change as the needs of the infant changes";

        // FINDING THE PRICE FOR THE CURRENT PROGRAM BASED ON THE AGE
        const currentProgramAge = updatedInputKidProgram.age;
        const updatedDescriptionText :string = updatedInputKidProgram.accordion_title.includes("Infant") ? infantDescription : updatedInputKidProgram.accordion_title.includes("Toddler") ? toddlerDescription : updatedInputKidProgram.accordion_title.includes("Pre") ? preschoolDescription : "";

        const currentProgramPrice = availablePrices.find(
          (item: { age: string; price: any }) => item.age === currentProgramAge
        )?.price;
        const updatedInputKidProgramData = {
          ...updatedInputKidProgram,
          accordion_title: `${
            updatedFirstName
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
              title: `${updatedFirstName}'s Description`,
              description:  generateDescription(updatedFirstName, updatedDescriptionText),
              color: "sky",
            },
            {
              title: `${updatedFirstName}'s Schedule`,
              description: updatedProgramSchedule,
              color: "grass",
            },
            
          ],
        };

        const updatedStore = {
          ...store,
          childProgram: updatedChildProgram,
          inputKidProgram: updatedInputKidProgramData,
        };

        setStore(updatedStore);
      },

      
    },
  };
};

export default getState;
