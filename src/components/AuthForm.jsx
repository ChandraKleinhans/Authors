import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthorForm = (props) =>{
    const { onSubmitCreatedForm, validate} = props
    // const [author, setAuthor] = useState(initialAuthor);
    const navigate = useNavigate();


    const [author, setAuthor] = useState("");
    const [createError, setCreateError] = useState('');
    
    const createAuthor = (e) => {
        e.preventDefault();
        const tempObjToSendToDB = {
            author
        }
        axios.post('http://localhost:8000/api/authors', tempObjToSendToDB)
        .then(response => {
            console.log("Client Success")
            console.log(response.data)
            navigate('/')
        })
        .catch(error => {
            console.log("Something Went Wrong")
            console.log(createError)
            const errorResponse = error.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setCreateError(errorArr);
        }) 
    }

    return(
    <div className='col-5 mx-auto'>
        <form onSubmit={createAuthor} >
            <div className='row form-group'>
                <label className='col form-label' htmlFor="author">Name</label>
                <input className='col form-control border border-dark' onChange={(e)=>setAuthor(e.target.value)} type="text" value={author.author} />
                {
                    validate ? <p className='text-danger'>{validate}</p> : ''
                }
            </div>
            <button type='submit' className='btn btn-success'>Submit</button>
            <Link className='btn btn-warning' to={"/"}>Cancel</Link>
        </form>
    </div>
    );

}
export default AuthorForm;