import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function DeferredViewErrorBoundary() {
  const error = useRouteError();
  const errorMessage = isRouteErrorResponse(error) ? `${error.status} | ${error.statusText}` : (error.message || error);

  return (
    <>
      <h1>View-specific error</h1>
      <p>{errorMessage}</p>
    </>
  )
}
