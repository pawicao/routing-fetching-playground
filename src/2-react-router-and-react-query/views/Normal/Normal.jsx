import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"
import { fetchDataQuery } from "../../service/queries"

export default function Normal() {
  const { data } = useQuery(fetchDataQuery());

  return (
    <>
      <h1>This is a route!</h1>
      <hr />
      <Link to="/">Go back</Link>
      <p>
        {data.data}
      </p>
    </>
  )
}
