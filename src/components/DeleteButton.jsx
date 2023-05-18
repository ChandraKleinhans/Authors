import axios from 'axios';
import React from 'react';

const DeleteButton = (props) =>{
    const {authorId,successDeleted} = props;

    const deleteBtn = async (e) => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            console.log("Response",response.statusText);
            successDeleted();
        } catch (error) {
            console.log("Error",error);
        }
    }

    return (
        <button className='btn btn-danger' onClick={()=>deleteBtn()}>Delete</button>
    );
}
export default DeleteButton;