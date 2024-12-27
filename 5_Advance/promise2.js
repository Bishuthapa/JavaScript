
const asyncOperation = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Async/Await Success"), 1000);
    });
  };
  
  const callAsyncOperation = async () => {
    try {
      const result = await asyncOperation();
      console.log(result); // Logs: "Async/Await Success"
    } catch (error) {
      console.error(error);
    }
  };
  
  callAsyncOperation();
  