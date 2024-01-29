import { Link, useLoaderData } from "react-router-dom"

export default function Normal() {
  const {data} = useLoaderData();
  return (
    <>
      <h1>This is a route!</h1>
      <hr />
      <Link to="/">Go back</Link>
      <p>
        {data}
      </p>
    </>
  )
}
