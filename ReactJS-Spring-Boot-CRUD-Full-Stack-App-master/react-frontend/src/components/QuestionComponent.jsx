import React, { Component } from 'react'

//import EmployeeService from '../services/EmployeeService'
import QuestionService from '../services/QuestionService';


class ListQuestionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
                
        }

        
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
         this.deleteEmployee = this.deleteEmployee.bind(this);

         
    }

    deleteEmployee(id){
        QuestionService.deleteQuestion(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){

        var listemp = []
        alert(listemp.length ) ;


     QuestionService.getQuestionsLevel('level1').then(
         (res) =>
          {
            this.setState({ employees: res.data});    
           listemp=     this.state.employees.map(
                    employee => {listemp[1]=employee}            
            )
          } 

          

        );

        alert(listemp.length) ;

    }

    addEmployee(){
        this.props.history.push('/add-question/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Question  List</h2>



<p id="questionstd">Rounded corners!</p>
<div  id="divstd" >

<p id="answrstd">xcxccccccccccccccccccccccccccccccccccccc</p> 

<table>
  <tr>
  <th><p id="answrstd">xcxccccccccccccccccccccccccccccccccccccc</p></th>
 
    <th><p id="answrstd">{ this.state.employees.filter(singleItem => singleItem.id === 132).id}</p> </th>
    <th><p id="answrstd">{this.state.employees.length}</p></th>
    <th><p id="answrstd">{this.state.employees.findIndex(obj => obj.id === 132)}</p></th>
    <th><p id="answrstd"></p></th>
  </tr>
  <tbody>
                                {




                                    this.state.employees.map(
                                        employee => 
                                        <tr >
                                             <td> { employee.id} </td>   
                                             <td> { employee.name} </td>   
                                             <td> { employee.option1} </td>   
                                             <td> { employee.option2} </td>   
                                             <td> { employee.option3} </td> 
                                             <td> { employee.option4} </td>   
                                             <td> { employee.answer} </td>
                                             <td> { employee.level} </td> 
                                             <td> { employee.subject} </td>    
                                                

                                            
                                             <td>
                                               
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 
                                             </td>
                                        </tr>
                                    )
                              }
                            </tbody>
  </table>

  </div>
  <p id="nextstd">next</p>
                        
            </div>
        )
    }
}


export default ListQuestionComponent
