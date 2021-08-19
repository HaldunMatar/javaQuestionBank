import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateQuestionComponent from './components/CreateQuestionComponent';

import ListQuestionComponent from './components/ListQuestionComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import MainComponent          from './components/MainComponent';



import QuestionComponent from './components/QuestionComponent';


function App() 
 {
  return (
		  
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                     {
                     /* 
                     <Route path = "/" exact component = {MainComponent}></Route>
                         
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                         <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route> */

                         }



                      <Route path = "/main" component = {MainComponent}></Route> 

                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          { <Route path = "/update-employee/id" component = {UpdateEmployeeComponent}></Route> }
                          <Route path = "/questions" component = {ListQuestionComponent}></Route> 
                          <Route path = "/add-question/:id" component = {CreateQuestionComponent}></Route>
                     
                          <Route path = "/question1/:level"   component = {QuestionComponent}></Route>

                         

                          
                    </Switch>
                </div>
              <FooterComponent />

)
        </Router>
    </div>
    
    
  );
}





export default App;
