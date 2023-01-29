import React, { useState } from 'react'
import axios from "axios";
import "./CreateNote.css"

const CreateNotes = () => {
    const [input, setInput] = useState({
        title: "",
        content: ""
    })

    function handleChange(e) {
        const { name, value } = e.target

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }



    function handleSubmit(e) {
        e.preventDefault()
        const newNote = {
            title: input.title,
            content: input.content

        }
        axios.post("https://createnote-api.onrender.com/create", newNote)
            .then(() => {
                console.log("data inserted")
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (


        <form className="container form-box">
            <div className="form-group " >
                <h1 className='form-title'>Create your note here</h1>
                <input className='form-control form-content' name="title" placeholder="Input your title here" value={input.title} onChange={handleChange} required ></input>
                <textarea className="form-control form-content" name="content" placeholder='Input your content here' value={input.content} onChange={handleChange} required></textarea>
                <button className='btn btn-lg btn-info ' onClick={handleSubmit}>Add Note</button>
            </div>



        </form>


    )
}

export default CreateNotes