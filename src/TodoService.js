const service = {
  getTodos: async () => {
    try {
      const reponse = await fetch("https://jsonplaceholder.typicode.com/todos");
      return await reponse.json();
    } catch (error) {
      console.warn("GET todos/ failed!", error);
    }
  },
};

export default service;
