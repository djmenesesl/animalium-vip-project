const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      usuario: {},
      cuidadores: [],
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      setAutUsuario: (usuario) => {
        setStore({ usuario: usuario });
      },

      setInfoUsuario: (infoUsuario) => {
        const store = getStore();
        setStore({
          usuario: {
            ...store.usuario,
            info: infoUsuario,
          },
        });
      },

      removeToken: () => {
        localStorage.removeItem("token");
        setStore({ usuario: {} });
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      addCuidadores: (cuidadores) => {
        let store = getStore();
        setStore({
          ...store,
          cuidadores: cuidadores,
        });
      },

      setProfileUsuario: async (ruta) => {
        let actions = getActions();
        try {
          const response = await fetch(
            process.env.BACKEND_URL + `/api/${ruta}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "Application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          if (!response.ok) {
            alert("Hubo un problema con tu solicitud");
            return;
          }
          const body = await response.json();
          actions.setInfoUsuario(body.user);
          return body.user;
        } catch (error) {
          console.log(error);
        }
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
