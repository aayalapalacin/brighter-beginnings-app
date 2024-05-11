import React, { useState, useEffect } from "react";
import getState from "./flux";
import { AccordionDataType } from "../component/Programs/ProgramType";

interface Store {
  test: string;
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
            start: 24,
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
