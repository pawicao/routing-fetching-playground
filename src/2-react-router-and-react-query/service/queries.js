import { fetchData } from "./api";

export const fetchDataQuery = () => ({
  queryKey: ['data'],
  queryFn: fetchData,
});
