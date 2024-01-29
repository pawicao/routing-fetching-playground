import { isRouteErrorResponse, useRouteError, json } from "react-router-dom";
import Normal from "./Normal";
import { fetchData } from "../../service"

// ! This file probably will not be needed. It's just here to illustrate an alternative way to set up the loaders!

export async function loader() {
  let data = await fetchData();
  return json(data);
}

export const Component = Normal;
Component.displayName = "Normal";

export function ErrorBoundary() {
  let error = useRouteError();
  return isRouteErrorResponse(error) ? (
    <h1>
      {error.status} {error.statusText}
    </h1>
  ) : (
    <h1>{error.message || error}</h1>
  );
}

// If you want to customize the component display name in React dev tools:
ErrorBoundary.displayName = "SampleErrorBoundary";