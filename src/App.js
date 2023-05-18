import './App.css';
import { Routes,Route } from 'react-router-dom';

import FavoriteAuthors from './views/Home';
import NewAuthor from './views/NewAuthor';
import EditAuthor from './views/EditAuthor';


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path = '/' element = {<FavoriteAuthors/>}/>
          <Route path = '/author/new' element = {<NewAuthor/>}/>
          <Route path = '/author/edit/:id' element = {<EditAuthor/>}/>
      </Routes>
    </div>
  );
}

export default App;
