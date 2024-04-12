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
    //this will be passed as the contenxt value
    const [state, setState] = useState<ContextValue | null>(null);

    useEffect(() => {
      // Fetch initial state using getState function
      const initialState = getState({
        getStore: () => state?.store,
        getActions: () => state?.actions,
        setStore: (updatedStore) =>
          setState((prevState) => ({
            ...prevState!,
            store: { ...prevState!.store, ...updatedStore },
            actions: { ...prevState!.actions },
          })),
      });

      setState(initialState);
    }, []);

    // The initial value for the context is not null anymore, but the current state of this component,
    // the context will now have a getStore, getActions and setStore functions available, because they were declared
    // on the state of this component
    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };
  return StoreWrapper;
};

export default injectContext;
