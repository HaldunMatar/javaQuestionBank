import React, { Component } from 'react'

//import EmployeeService from '../services/EmployeeService'
import QuestionService from '../services/QuestionService';
import { Link} from 'react-router-dom'
class ListQuestionComponent extends Component {

    
    constructor(props) {
        super(props)

        this.state = {
                employees: [] ,
                squares: Array().fill(10),
                questionArrayName :Array() ,
                questionArrayoption1 :Array() ,
                questionArrayoption2 :Array() ,
                questionArrayoption3 :Array() ,
                questionArrayoption4 :Array() ,
                questionArrayAnswer :Array() ,


                name: '',
              option1: '',
              option2: '' ,
              option3: '' ,
              option4: '' ,
              answer: '' ,

              indexquestion:1,
              
                items: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
         this.deleteEmployee = this.deleteEmployee.bind(this);
         this.increasIndex = this.increasIndex.bind(this);

        
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

        this.setState({ indexquestion:3});
        this.props.history.go(0) ;

      //  this.props.history.push(`/add-employee/${id}`);
    }


    increasIndex(){
        this.setState({ indexquestion:3});
    }

    

    componentDidMount(){

      //  this.squares[3]=12;
        
        QuestionService.getQuestions().then((res) => {
            this.setState({ employees: res.data});

            this.setState({ items: [{name:'ggg', name1:'ggggggg'} ,
            {name:'ddd', name1:'dd'} ] } ) ;

        
            this.setState({   items:   this.state.employees.map(x => x ) });
        
           let   homeArray = new Array(this.state.employees.length);
            let j = 0
            
            for (var key in this.state.employees) {
                homeArray[j] =  this.state.employees[key].name;
                j = j + 1;




            }

         //   alert(homeArray[3])

            this.setState({ questionArray:homeArray});

          
           for (var i = 0;
            i < this.state.employees.length;
            i++) {


               // this.setState({ items[i]: });
          }

          //  alert(items[1].name);

           // TypeError: this.state.items[1] is undefined
           this.setState({ option3: this.state.employees[this.state.indexquestion].name});


        });

      
      

      
    }

    addEmployee(){
      //  this.props.history.push('/add-question/_add');

      this.setState({ indexquestion:this.state.indexquestion +1 });
   //   this.setState({ option3: this.state.employees[this.state.indexquestion].name});
      //this.props.history.go(0) ;
    }

    render() {

      
        return (
            <div>

<p id="questionsnum">  ?????????? ??????????????   </p>
               
                 <div className = "row">
                   
                    <Link  to="/main"  id="questionsnum">   ???????????? ???????????? ????????????????   </Link>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>

                              
                                    <th>id</th>
                                    <th> ????????????</th>
                                    <th> ???????????? ??????????</th>
                                    <th>???????????? ????????????</th>
                                    <th>???????????? ????????????</th>
                                    <th> ???????????? ????????????</th>
                                    <th>  ?????? ?????????????? ??????????????   </th>
                                    <th> ??????????????</th>
                                    <th> ????????????</th>

                                  
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
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info">View </button> 
                                                    <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">??????  </button>
                                                 
                                                 */}  
                                                    <button style={{marginLeft: "10px"}} onClick={ () => {}} className="btn btn-danger">??????  </button>
                                                 
                                                 
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
