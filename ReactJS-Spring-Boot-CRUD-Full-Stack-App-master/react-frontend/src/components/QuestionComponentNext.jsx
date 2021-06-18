import React, { Component } from 'react'

//import EmployeeService from '../services/EmployeeService'
import QuestionService from '../services/QuestionService';


class ListQuestionComponent extends Component {
    constructor(props) {

    
        super(props)

        this.state = {
            //  id: this.props.match.params.id,
  
           // id: 35,
              name: '',
              option1: '',
              option2: ''
          }

        this.addEmployee = this.addEmployee.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
         this.deleteEmployee = this.deleteEmployee.bind(this);

         
    }

    deleteEmployee(id){
        QuestionService.deleteQuestion(id).then( res => {
          //  this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){

        QuestionService.getQuestionById(35).then( (res) =>{
          
         
           let question = res.data;
            this.setState({name: question.name,
                option1: question.option1,
                option2 : question.option2,
                option3: question.option3,
                option4 : question.option4,
            });
        });


    /* QuestionService.getQuestionsLevel('level1').then(
         (res) =>
          {
            this.setState({ employees: res.data});    
                
          } 

          

        );*/

       

    }


    addEmployee(){
      this.props.history.push('/question1/');
  }

    nextQuestion(){
        
      alert('nextQuestion') ; 
           //  this.props.history.push('/question1/');
            this.props.history.push('/question1/');
         }

    render() {
        return (
            <div>
               


<p id="questionstd">{this.state.name}</p>
<div  id="divstd" >



<div>

  

<table  width = '100%' >
  <tr width = '100%'>

 
    <th><p id="answrstd" >{this.state.option1}</p> </th>
    <th><p id="answrstd">{this.state.option2}</p></th>
    <th><p id="answrstd">{this.state.option3}</p></th>
    <th><p id="answrstd">{this.state.option4}</p></th>
  </tr>
 
  </table>
  </div>

  </div>
  <button className="btn btn-primary" onClick={this.addEmployee}>السؤال التالي</button>
  
  <p id="nextstd"  onClick={this.addEmployee}  > next</p>
                        
            </div>
        )
    }
}


export default ListQuestionComponent
