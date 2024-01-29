import { defer } from "react-router-dom";
import { fetchData } from "../service"

export const normalLoader = () => fetchData();
export const deferredLoader = () => defer({ data: fetchData() });
