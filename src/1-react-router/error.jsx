import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorBoundary() {
  const error = useRouteError();
  const errorMessage = isRouteErrorResponse(error) ? `${error.status} | ${error.statusText}` : (error.message || error);

  return (
    <>
      <h1>Error</h1>
      <p>{errorMessage}</p>
    </>
  )
}
