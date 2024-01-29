import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>Let&apos;s test routing!</h1>
      <Link to="/normal">Go to another route</Link>
      <Link to="/deferred">Go to another route<br />(with deferred data load)</Link>
      <p className="bottom-note" style={{marginTop: '3rem'}}>
        In main.jsx try importing another folder to see how things work with different config design idea (or with React Query).
      </p>
    </>
  )
}

export default App
