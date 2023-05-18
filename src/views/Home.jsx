import React from 'react';

import AuthorList from '../components/AuthorTable';
import NavigationBar from '../components/NavBar';

const FavoriteAuthors = (props) => {
    return(
        <div>
            <NavigationBar/>
            <AuthorList/>
        </div>
    );
}
export default FavoriteAuthors;