import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import AuthorForm from '../components/AuthForm';
import NavigationBar from '../components/NavBar';

const EditAuthor = (props) =>{
    const {id} = useParams();
    const [author, setAuthor] = useState({});
    const [loaded, setLoaded] = useState(false)
    const [editError, setEditError] = useState('');

    const getAuthorById = async (authorId) =>{
        try {
            const response = await axios.get(`http://localhost:8000/api/author/${authorId}`)
            console.log("Response", response.statusText);
            setAuthor(response.data.author);
            setLoaded(true);
        } catch (error) {
            console.log("Error", error);
        }
    }

    useEffect(() => {
      getAuthorById(id);
    }, [id])
    
    const editAuthor = async (author) =>{
        console.log("Author edited");
        try {
            const response = await axios.put(`http://localhost:8000/api/authors/${id}`,author)
            console.log("Response",response.statusText);
        } catch (error) {
            console.log("Error",error.response.data.error.message);   
            setEditError(error.response.data.error.message); 
        }
    }

    return(
        <div>
            {
                loaded && (
                    <div>
                        <NavigationBar/>
                        <h1>Edit Author</h1>
                        <AuthorForm initialAuthor={author} onSubmitCreatedForm={editAuthor} validate={editError}/>
                    </div>
                )
            }
        </div>
    );

}
export default EditAuthor;