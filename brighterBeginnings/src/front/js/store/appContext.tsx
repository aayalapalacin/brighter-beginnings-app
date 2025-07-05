import React, { useState, useEffect, useRef  } from "react";
import getState from "./flux";
import { AccordionDataType } from "../pages/programs";
import availablePrograms from "../../../data/programs.js"



const programData :AccordionDataType[] = availablePrograms;
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

        availablePrograms: programData ,
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
