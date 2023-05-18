import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <div>
                        <Link type='button' className='btn navbar-brand' to={"/"}>
                            <h1 className='text-light'>Favorite Authors</h1>
                        </Link>
                    </div>
                    <div className='btn-group' role={"group"}>
                        <Link type='button' className='btn navbar-brand' to={"/"}>
                            Home
                        </Link>
                        <Link type='button' className='btn navbar-brand' to={"/author/new"}>
                            New Author
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default NavigationBar;