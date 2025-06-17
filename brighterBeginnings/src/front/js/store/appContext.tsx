import React, { useState, useEffect } from "react";
import getState from "./flux";
import { AccordionDataType } from "../pages/programs";

let infantDescription :string = "Your infant's experience at Brighter Beginnings Child Care L.L.C. is tailored to their unique needs and development. We provide personalized nap schedules and cozy cribs equipped with your provided sleep sack and bedding (no blankets). Infants typically enjoy two naps a day and have designated times for snacks and breakfast at an infant table with secure seating. You're encouraged to bring your infants's snacks and lunch- keep in mind we don't use microwaves, we do provide fridge space. Whole milk is provided. Your infant will love daily outdoor strolls, engaging books, and stimulating toys. Our caregivers also read to them, fostering early language development in our nurturing environment."

let toddlerDescription :string = "Your toddler builds on the foundations established in our Infant Class, focusing on independence and exploration. After lunch, they take a (1) daily nap on mats where we ask you provide the bedding. Mealtime is structured, with each child having an assigned chair at a table for snacks and lunch. We ask that parents provide all meals- keep in mind we don't have microwaves, we do provide fridge space. Whole milk is available. Your toddler will enjoy sensory activities, including art projects and sensory play with sand, water, and more. They will participate in storytime, sing-alongs, and plenty of outdoor play in our safe play areas, ensuring a stimulating day."

let preschoolDescription: string = " Your preschooler will thrive in our comprehensive educational environment, promoting physical, social, emotional, and language development. Our curriculum revolves around monthly themes and emergent learning concepts, encouraging diverse experiences and self-expression. Weekly activities include English Language Arts, Science and Technology, History and Social Science, Comprehensive Health, The Arts, Music, Creative Movement, Pre-reading, and Mathematics. Indoor and outdoor gross motor play are integral, fostering self-help skills, independence, and self-regulation for your preschooler. Parents provide snacks and lunch- keep in mind we don't have microwaves, we do provide fridge space."

interface Store {
  users: any[];
 
  childProgram: {
    firstName: string;
    yearsOld: string;
    monthsOld: string;
  };
  inputKidProgram: AccordionDataType;
  availablePrograms: AccordionDataType[];
  philosophyData: AccordionDataType[]; // Add philosophyData to the Store interface
}

interface Actions {
  [key: string]: (...args: any[]) => void;
}

export interface ContextValue {
  store: Store;
  actions: Actions;
}

export const Context = React.createContext<ContextValue | null>(null);

type PassedComponentType = React.ComponentType<any>;

const injectContext = (PassedComponent: PassedComponentType) => {
  type PropsType = React.ComponentProps<PassedComponentType>;

  const StoreWrapper: React.FC<PropsType> = (props) => {
    const [state, setState] = useState<ContextValue>({
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
      actions: {},
    });

    useEffect(() => {
      const fetchInitialState = async () => {
        const initialState = getState({
          getStore: () => state?.store,
          getActions: () => state?.actions,
          setStore: (updatedStore) =>
            setState((prevState) => ({
              ...prevState!,
              store: {
                ...prevState!.store,
                ...updatedStore,
                philosophyData: updatedStore.philosophyData || [],
              },
              actions: { ...prevState!.actions },
            })),
        });

        setState(initialState);
      };
      fetchInitialState();
    }, []);

    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };
  return StoreWrapper;
};

export default injectContext;
