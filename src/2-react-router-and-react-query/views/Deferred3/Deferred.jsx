import { Suspense } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Link } from "react-router-dom";
import { fetchDataQuery } from '../../service/queries';
import { ErrorBoundary } from 'react-error-boundary';

function DataDisplayer() {
  const { data } = useSuspenseQuery(fetchDataQuery());

  return <p>{data.data}</p>
}

export default function Deferred() {
  return (
    <>
      <h1>This is a faster loading route!</h1>
      <hr />
      <Link to="/">Go back</Link>
      <ErrorBoundary fallback={<p className="error">Error loading data!</p>}>
        <Suspense fallback={<p className="bottom-note">Loading data...</p>}>
          <DataDisplayer />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
