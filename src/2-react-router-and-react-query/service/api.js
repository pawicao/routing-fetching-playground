// eslint-disable-next-line no-unused-vars
export const fetchData = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject('Error!')
    resolve({ data: "Data is here!"});
  }, 3000);
});
