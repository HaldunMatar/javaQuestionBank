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
        QuestionService.getQuestions().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-question/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Question  List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Add question</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> الرقم</th>
                                    <th> السؤال</th>
                                    <th> الخيار الاول</th>
                                    <th>الخيار الثاني</th>
                                    <th>الخيار الثالث</th>
                                    <th> الخيار الرابع</th>
                                    <th> المستوى</th>
                                    <th> المادة</th>

                                  
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
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
                                               {/*  <button onClick={ () => this.editEmployee(employee.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button>  */}  
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete </button>
                                                 
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListQuestionComponent
