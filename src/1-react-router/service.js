export const fetchData = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve({ data: "Data is here!"});
  }, 5000);
});
