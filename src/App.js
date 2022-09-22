import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'; 
import Main from './Main_Page.jsx'
import First_Page from './First_Page.jsx'
import Login from './Login_Page.jsx'
import Register from './Register.jsx'
import HomePage from './Home_Page.jsx'
import Profile from './Profile.jsx'

function App() {
  return (
    <div>
       <Router>  
          <div>    
            <Routes>  
              <Route exact path='' element={<First_Page/>}></Route>  
              <Route exact path='/home' element={<Main/>}></Route>   
              <Route exact path='/login' element={<Login/>}></Route> 
              <Route exact path='/register' element={<Register/>}></Route> 
              <Route exact path='/HomePage' element={<HomePage/>}></Route>
              <Route exact path='/profile' element={<Profile/>}></Route>
            </Routes>  
          </div>  
       </Router>  
    </div>
  );
}

export default App;
