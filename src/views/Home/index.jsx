import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Im in the Homepage</h1>
      <Link to="/beers">All Beers</Link>
      <Link to="/random-beer">Random Beer</Link>
      <Link to="/new-beer">New Beer</Link>
    </div>
  )
}

export default Home;