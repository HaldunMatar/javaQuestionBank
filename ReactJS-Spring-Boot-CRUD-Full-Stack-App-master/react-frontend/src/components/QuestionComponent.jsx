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
                option2 : question.option2
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
        
 alert('ffffffffff') ; 
      //  this.props.history.push('/question1/');
       this.props.history.push('/question1/');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Question  List</h2>



<p id="questionstd">{this.state.name}</p>
<div  id="divstd" >

<p id="answrstd">xcxccccccccccccccccccccccccccccccccccccc</p> 

<table>
  <tr>
  <th><p id="answrstd">xcxccccccccccccccccccccccccccccccccccccc</p></th>
 
    <th><p id="answrstd"></p> </th>
    <th><p id="answrstd"></p></th>
    <th><p id="answrstd"></p></th>
    <th><p id="answrstd"></p></th>
  </tr>
  <tbody>
                                {


                              }
                            </tbody>
  </table>

  </div>

  <button  className="btn btn-primary" onClick={this.addEmployee}>  السؤال التالي</button>
  <p id="nextstd">next</p>
                        
            </div>
        )
    }
}


export default ListQuestionComponent
