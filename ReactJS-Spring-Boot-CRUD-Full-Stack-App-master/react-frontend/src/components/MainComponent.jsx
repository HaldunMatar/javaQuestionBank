
import React, { Component } from 'react'
import QuestionService from '../services/QuestionService';



class MainComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullName: 'Haldun Matar ',
            level: 'level1',
            subject: 'null',
        }

        this.startRace = this.startRace.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLevelHandler = this.changeLevelHandler.bind(this);
        this.changeSubjectHandler = this.changeSubjectHandler.bind(this);

        
       
    }

 
    getTitle(){
       
            return <h6 className="text-center"> الصفحة الرئسية أختيار المسابقة</h6>
      
    }
        
    changeFirstNameHandler= (event) => {
        this.setState({fullName: event.target.value});
    }

    changeLevelHandler= (event) => {
      this.setState({level: event.target.value});
    }


    changeSubjectHandler= (event) => {
        this.setState({subject: event.target.value});
      }
 
    startRace(level,subject){
        alert(subject);
        
        this.props.history.push(`/question1/${level}/`); 

    }

 
  
    render() {
        return (
            <div> 

<progress length='300' class="progressBar"  value="0" max="0" id="progressBar">  </progress>
                <div >
                <p id="questionsnum">  الصفحة الرئيسية اختيار المسابقة </p>

               
                                </div>
               <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                     
                                            <input  hidden  placeholder=" Name"  id="fullName" name="fullName" className="form-control" 
                                                value={this.state.fullName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                       
                                     

                                        <div className = "form-group">
                                        <p id="labeltext">  المستوى </p>
                                            <select  onChange={this.changeLevelHandler}  placeholder="Level" name="level" className="form-control" 
                                                value={this.state.level} onChange={this.changeLevelHandler} >
                                                    
                                                <option   selected   value="level1">المستوى الأول</option>
                                              <option value="level2">المستوى الثاني</option>
 
                                                      </select>
                                        </div>
                                        <div className = "form-group">
                                        <p id="labeltext">  المادة </p>
                                            <select  onChange={this.changeSubjectHandler}  placeholder="subject" name="subject" className="form-control" 
                                                value={this.state.level} onChange={this.changeSubjectHandler} >
                                                     <option   selected   value="math"> ----</option>
                                                <option   selected   value="math"> الرياضيات</option>
                                              <option value="arabic"> اللغة العربية</option>
 
                                                      </select>
                                        </div>









                                        
                                        <p id="nextstd"  onClick={ () => this.startRace(this.state.level,this.state.subject)}   > البدء</p>
                                   </form>
           
                   </div>
                   <p id="demo"></p>
            </div>
        )
    }
}


export default MainComponent