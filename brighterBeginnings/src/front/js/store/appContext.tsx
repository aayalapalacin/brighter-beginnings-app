import React, { useState, useEffect, useRef  } from "react";
import getState from "./flux";
import { AccordionDataType } from "../pages/programs";
import availableProgram from "../../../data/programs.js"

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

        availablePrograms: availableProgram,
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

    // Create a ref to hold the latest 'state' object
    const stateRef = useRef(state); // Initialize with current state

    // Update the ref whenever 'state' changes
    useEffect(() => {
        stateRef.current = state;
    }, [state]); // This useEffect depends on 'state' and keeps the ref up-to-date

    // eslint-disable-next-line react-hooks/exhaustive-deps
     useEffect(() => {
      const fetchInitialState = async () => {
        const initialState = getState({
          // Now, use the ref to get the *latest* state and actions
          getStore: () => stateRef.current?.store,
          getActions: () => stateRef.current?.actions,
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
