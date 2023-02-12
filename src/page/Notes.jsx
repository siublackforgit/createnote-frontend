import React, { useEffect, useState } from 'react'
import './Notes.css'


const Notes = () => {
  const [notes, setNotes] = useState([{
    title: '',
    content: ''
  }])

  useEffect(() => {
    fetch("https://createnote-api.onrender.com/notes").then(res => {
      if (res.ok) {
        console.log(res)
        return res.json()
      }
    }).then(jsonRes => setNotes(jsonRes))
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (

    <div className='container note-box'>
      <h1 className='index-title'>Notes Page</h1>
      {notes.map((note, index) =>
        <div className="content-box">
          <div key={index}>
            <p className='index-title'>Index: {index + 1}</p>
            <h2 className="index-title">Title:</h2>
            <h1 className='index-title'>{note.title}</h1>
            <p>Content:</p>
            <p>{note.content}</p>
          </div>
        </div>
      )}

    </div>
  )
}

export default Notes