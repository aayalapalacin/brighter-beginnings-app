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
      availablePrograms: [
        {
          category: "Infant",
          age: "4 Weeks - 15 Months",
          img: "/programs_images/infant.png",
          color: "grass",
          price: "15.00/hr",
          description: "We'll take care",
          schedule: "Someday thru someday",
          staff: "Andres and alex",
        },
        {
          category: "Toddler",
          age: "16 Months - 2 Yrs",
          img: "/programs_images/toddler.png",
          color: "sky",
          price: "15.00/hr",
          description: "We'll take care",
          schedule: "Someday thru someday",
          staff: "Andres and alex",
        },
        {
          category: "Pre-School",
          age: "2 Yrs - 5 Yrs",
          img: "/programs_images/pre_school.png",
          color: "sun",
          price: "15.00/hr",
          description: "We'll take care",
          schedule: "Someday thru someday",
          staff: "Andres and alex",
        },
      ],
    },
    actions: {
      getUser: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "api/user");
          const data = await resp.json();
          setStore({ users: data });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading users from backend", error);
        }
      },
      handleChildProgramSubmit: (
        e: React.FormEvent<HTMLFormElement>,
        firstName: string,
        yearsOld: string,
        monthsOld: string
      ) => {
        const store = getStore();
        e.preventDefault();

        const updatedChildProgram = {
          firstName: firstName,
          yearsOld: yearsOld,
          monthsOld: monthsOld,
        };

        const updatedStore = {
          ...store,
          childProgram: updatedChildProgram,
        };
        setStore(updatedStore);
        console.log("function is running");
      },
    },
  };
};

export default getState;
