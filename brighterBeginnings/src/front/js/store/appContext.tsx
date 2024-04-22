import React, { useState, useEffect } from "react";
import getState from "./flux";
import { KidType } from "../component/Programs/ProgramsAccordion";

interface Store {
  test: string;
  users: any[];
  childProgram: {
    firstName: string;
    yearsOld: string;
    monthsOld: string;
  };
  inputKidProgram: KidType;
  availablePrograms: KidType[];
  philosophyData: KidType[]; // Add philosophyData to the Store interface
}

interface Actions {
  [key: string]:
    | (() => void)
    | ((
        e: React.FormEvent<HTMLFormElement>,
        firstName: string,
        yearsOld: string | number,
        monthsOld: string | number
      ) => void);
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
    const [state, setState] = useState<ContextValue | null>(null);

    useEffect(() => {
      const fetchInitialState = async () => {
        const initialState = await getState({
          getStore: () => state?.store,
          getActions: () => state?.actions,
          setStore: (updatedStore) =>
            setState((prevState) => ({
              ...prevState!,
              store: { ...prevState!.store, ...updatedStore, philosophyData: updatedStore.philosophyData || [] },
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
