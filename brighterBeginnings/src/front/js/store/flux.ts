import { AccordionDataType } from "../pages/programs";
import { generateDescription } from "../utils/generateProgramData";
import availablePrograms from "../../../data/programs"

interface GetStateParams {
  getStore: () => any;
  getActions: () => any;
  setStore: (updatedStore: any) => void;
}
let infantDescription :string = "Your infant's experience at Brighter Beginnings Child Care L.L.C. is tailored to their unique needs and development. We provide personalized nap schedules and cozy cribs equipped with your provided sleep sack and bedding (no blankets). Infants typically enjoy two naps a day and have designated times for snacks and breakfast at an infant table with secure seating. You're encouraged to bring your infants's snacks and lunch- keep in mind we don't use microwaves, we do provide fridge space. Whole milk is provided. Your infant will love daily outdoor strolls, engaging books, and stimulating toys. Our caregivers also read to them, fostering early language development in our nurturing environment."


let toddlerDescription :string = "Your toddler builds on the foundations established in our Infant Class, focusing on independence and exploration. After lunch, they take a (1) daily nap on mats where we ask you provide the bedding. Mealtime is structured, with each child having an assigned chair at a table for snacks and lunch. We ask that parents provide all meals- keep in mind we don't have microwaves, we do provide fridge space. Whole milk is available. Your toddler will enjoy sensory activities, including art projects and sensory play with sand, water, and more. They will participate in storytime, sing-alongs, and plenty of outdoor play in our safe play areas, ensuring a stimulating day."


let preschoolDescription: string = " Your preschooler will thrive in our comprehensive educational environment, promoting physical, social, emotional, and language development. Our curriculum revolves around monthly themes and emergent learning concepts, encouraging diverse experiences and self-expression. Weekly activities include English Language Arts, Science and Technology, History and Social Science, Comprehensive Health, The Arts, Music, Creative Movement, Pre-reading, and Mathematics. Indoor and outdoor gross motor play are integral, fostering self-help skills, independence, and self-regulation for your preschooler. Parents provide snacks and lunch- keep in mind we don't have microwaves, we do provide fridge space."


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
