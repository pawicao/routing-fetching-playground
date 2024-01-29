import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>Let&apos;s test routing!</h1>
      <Link to="/normal">Go to another route</Link>
      <Link to="/deferred">Go to another route<br />(with deferred data load)</Link>
      <Link to="/deferred2">Go to another route<br />(with deferred data load and using different hooks for UI)</Link>
      <Link to="/deferred3">Go to another route<br />(with deferred data load and using EVEN MORE DIFFERENT hooks for UI)</Link>
      <p className="bottom-note" style={{marginTop: '3rem'}}>
        In main.jsx try importing another folder to see how things work with different config design idea (or with React Query).
      </p>
    </>
  )
}

export default App
