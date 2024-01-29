/* eslint-disable react/prop-types */
import { useQuery } from '@tanstack/react-query';
import { Link } from "react-router-dom";
import { fetchDataQuery } from '../../service/queries';

function DataDisplayer({ data }) {
  return <p>{data.data}</p>
}

export default function Deferred() {
  const { data, isLoading, isError } = useQuery(fetchDataQuery());

  const renderContent = () => {
    if (isError) {
      return <p className="error">Error loading data!</p>;
    }
    if (isLoading) {
      return <p className="bottom-note">Loading data...</p>;
    }
    return <DataDisplayer data={data} />;
  }

  return (
    <>
      <h1>This is a faster loading route!</h1>
      <hr />
      <Link to="/">Go back</Link>
      {renderContent()}
    </>
  )
}
