import { defer } from "react-router-dom";
import { fetchDataQuery } from "../service/queries";

export const normalLoader = (queryClient) => async () => {
  const query = fetchDataQuery();
  return await queryClient.ensureQueryData(query);
};

export const deferredLoader = (queryClient) => () => {
  const query = fetchDataQuery();
  return defer({data: queryClient.ensureQueryData(query) });
};
