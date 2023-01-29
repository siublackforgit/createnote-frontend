import React from 'react'
import "./Home.css"
const Home = () => {
  return (
    <div className='Home container'>
        <h1 className='Home-title'>Ricky Yeung 's small Mern Project</h1>
        <p>This is my small Mern Project that include frontend and backend
          <br />
          <br />
            There are three pages
            <br />
            <br />Home: Introduction of this webapp.
            <br />CreateNotes: There are two sections that you can input your note, one is title, the other one is content.
            <br />Notes: This is the page that shows all the notes that your had input.
        </p>
    </div>
  )
}

export default Home