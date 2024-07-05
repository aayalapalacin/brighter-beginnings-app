import { AccordionDataType } from "../pages/programs";
import { generateDescription } from "../utils/generateProgramData";
import Footer from "../component/Footer";

let infantDescription :string = "Your infant's experience at Brighter Beginnings Child Care L.L.C. is tailored to their unique needs and development. We provide personalized nap schedules and cozy cribs equipped with your provided sleep sack and bedding (no blankets). Infants typically enjoy two naps a day and have designated times for snacks and breakfast at an infant table with secure seating. You're encouraged to bring your infants's snacks and lunch- keep in mind we don't use microwaves, we do provide fridge space. Whole milk is provided. Your infant will love daily outdoor strolls, engaging books, and stimulating toys. Our caregivers also read to them, fostering early language development in our nurturing environment."

let toddlerDescription :string = "Your toddler builds on the foundations established in our Infant Class, focusing on independence and exploration. After lunch, they take a (1) daily nap on mats where we ask you provide the bedding. Mealtime is structured, with each child having an assigned chair at a table for snacks and lunch. We ask that parents provide all meals- keep in mind we don't have microwaves, we do provide fridge space. Whole milk is available. Your toddler will enjoy sensory activities, including art projects and sensory play with sand, water, and more. They will participate in storytime, sing-alongs, and plenty of outdoor play in our safe play areas, ensuring a stimulating day."
const toddlerSchedule = `<table>
  <thead>
    <tr>
      <th>Time</th>
      <th>Activity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>6:45 - 7:30</td>
      <td>Arrival/Quiet Play</td>
    </tr>
    <tr>
      <td>7:30 - 7:45</td>
      <td>Breakfast</td>
    </tr>
    <tr>
      <td>7:45 - 8:45</td>
      <td>Free Choice</td>
    </tr>
    <tr>
      <td>8:45 - 9:00</td>
      <td>Diaper Check/Wash Hands/Toilet Learning</td>
    </tr>
    <tr>
      <td>9:00 - 9:15</td>
      <td>Circle</td>
    </tr>
    <tr>
      <td>9:15 - 9:30</td>
      <td>Diaper Check/Wash Hands/Toilet Learning</td>
    </tr>
    <tr>
      <td>9:30 - 10:00</td>
      <td>Snack</td>
    </tr>
    <tr>
      <td>10:00 - 10:30</td>
      <td>Teacher Directed Activity - Science, Music, Large Motor</td>
    </tr>
    <tr>
      <td>10:30 - 11:30</td>
      <td>Outdoor Play/Indoor Free Play/Large Motor</td>
    </tr>
    <tr>
      <td>11:30 - 11:45</td>
      <td>Diaper Check/Wash Hands/Toilet Learning</td>
    </tr>
    <tr>
      <td>11:45 - 12:15</td>
      <td>Lunch</td>
    </tr>
    <tr>
      <td>12:15 - 12:30</td>
      <td>Diaper Check/Wash Hands/Toilet Learning</td>
    </tr>
    <tr>
      <td>12:30 - 12:45</td>
      <td>Story Time</td>
    </tr>
    <tr>
      <td>12:45 - 2:45</td>
      <td>Nap</td>
    </tr>
    <tr>
      <td>2:45 - 3:15</td>
      <td>Diaper Check/Wash Hands/Toilet Learning</td>
    </tr>
    <tr>
      <td>3:15 - 3:30</td>
      <td>Afternoon Snack</td>
    </tr>
    <tr>
      <td>3:30 - 4:00</td>
      <td>Afternoon Activity (open ended) - play dough etc...</td>
    </tr>
  </tbody>
</table>`
let preschoolDescription: string = " Your preschooler will thrive in our comprehensive educational environment, promoting physical, social, emotional, and language development. Our curriculum revolves around monthly themes and emergent learning concepts, encouraging diverse experiences and self-expression. Weekly activities include English Language Arts, Science and Technology, History and Social Science, Comprehensive Health, The Arts, Music, Creative Movement, Pre-reading, and Mathematics. Indoor and outdoor gross motor play are integral, fostering self-help skills, independence, and self-regulation for your preschooler. Parents provide snacks and lunch- keep in mind we don't have microwaves, we do provide fridge space."
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
          start: 1.5,
          end: 15,
          img: "/programs_images/infant.png",
          bg_color: "grass",
          dropdownData: [
            {
              title: "Price",
              description: "5 Days Starting at $345.00 WK",
              color: "carrot",
            },
            {
              title: "Description",
              description: infantDescription,
              color: "sky",
            },
            {
              title: "Schedule",
              description: "During intake, parents and the infant’s educator will write up a schedule altered to that particular infant. Infant schedules are individual and may change as the needs of the infant changes",
              color: "grass",
            },
            
          ],
        },
        // Toddler
        {
          accordion_title: "Toddler Program Details",
          age: "16 Mo - 2.9 Yrs",
          start: 16,
          end: 34,
          img: "/programs_images/toddler.png",
          bg_color: "sky",
          dropdownData: [
            {
              title: "Price",
              description: "5 Days Starting at $320.00 Wk",
              color: "carrot",
            },
            {
              title: "Description",
              description: toddlerDescription,
              color: "sky",
            },
            {
              title: "Schedule",
              description: "toddler schedule",
              color: "grass",
            },
            
          ],
        },
        // Pre-schooler
        {
          accordion_title: "Pre-School Program Details",
          age: "2.9 Yrs - 5 Yrs",
          start: 34.1,
          end: 60,
          img: "/programs_images/pre_school.png",
          bg_color: "sun",
          dropdownData: [
            {
              title: "Price",
              description: "5 Days starting at $245.00 Wk, 3 Days starting at $159.00 Wk, 2 Days starting at $113.00 Wk",
              color: "carrot",
            },
            {
              title: "Description",
              description: preschoolDescription,
              color: "sky",
            },
            {
              title: "Schedule",
              description: "preschool schedule",
              color: "grass",
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
        }
        if (monthsOld === "") {
          monthsOld = 0;
        }

        // PARSING INPUTS TO INTEGERS
        const parsedYearsOld = parseFloat(yearsOld);
        const parsedMonthsOld = parseFloat(monthsOld);

        const updatedChildProgram = {
          firstName: firstName,
          yearsOld: parsedYearsOld,
          monthsOld: parsedMonthsOld,
        };
        // verifying kid's age
        const kidAgeInMonths = parsedMonthsOld + parsedYearsOld * 12;
        //
        const matchingProgram = store.availablePrograms.find(
          (program: AccordionDataType) => {
            console.log(kidAgeInMonths, "kidsAge");
            return (
              kidAgeInMonths <= program.end && kidAgeInMonths >= program.start
            );
          }
        );

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
        const updatedDescriptionText :string = updatedInputKidProgram.accordion_title.includes("Infant") ? infantDescription : updatedInputKidProgram.accordion_title.includes("Toddler") ? toddlerDescription : updatedInputKidProgram.accordion_title.includes("Pre") ? preschoolDescription : "";

        const currentProgramPrice = availablePrices.find(
          (item: { age: string; price: any }) => item.age === currentProgramAge
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
              description:  generateDescription(updatedInputKidProgram.childName, updatedDescriptionText),
              color: "sky",
            },
            {
              title: `${updatedInputKidProgram.childName}'s Schedule`,
              description: "Monday - Friday, 7:40am - 5pm",
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
