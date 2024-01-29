import { Suspense } from 'react';
import { Link, useLoaderData, useAsyncValue, Await } from "react-router-dom";

function DataDisplayer() {
  const data = useAsyncValue();

  return <p>{data.data}</p>
}

export default function Deferred() {
  const { data } = useLoaderData();

  return (
    <>
      <h1>This is a faster loading route!</h1>
      <hr />
      <Link to="/">Go back</Link>
      <Suspense fallback={<p className="bottom-note">Loading data...</p>}>
        <Await
          resolve={data}
          errorElement={<p className="error">Error loading data!</p>}
        >
          <DataDisplayer />
        </Await>
      </Suspense>
    </>
  )
}
