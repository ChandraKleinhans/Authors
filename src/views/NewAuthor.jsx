import React from 'react';

import AuthorForm from '../components/AuthForm';
import NavigationBar from '../components/NavBar';

const NewAuthor = () =>{

        return(
        <div>
            <NavigationBar/>
            <h1>New Author</h1>
            <AuthorForm/>
        </div>
    );
}
export default NewAuthor;