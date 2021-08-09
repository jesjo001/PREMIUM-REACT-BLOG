import React from 'react'
import { Link } from 'react-router-dom'

const NotFound  = (props) => {
return(
  <div className="not-found">
    <h2>Opps</h2>
    <p>The page does not exist </p>
    <Link to="/">Back to Home Page </Link>
  </div>
  )
}
export default NotFound
