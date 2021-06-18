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
              option2: '' ,
              option3: '' ,
              option4: '' ,
              answer: '' ,
          }

          this.nextQuestion = this.nextQuestion.bind(this);

        this.addEmployee = this.addEmployee.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
         this.deleteEmployee = this.deleteEmployee.bind(this);

         this.checkQuestion = this.checkQuestion.bind(this);


         

         
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
                answer : question.answer,

                
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
      
      this.props.history.push('/next-question1/');
  }

    nextQuestion(){
        
    //  alert('nextQuestion') ; 
           //  this.props.history.push('/question1/');
        // this.props.history.push('/next-question1/');

        window.location.reload();
           
         }

         checkQuestion(id){
          alert('checkQuestion')

          if(id== 1)
          alert('1')
          if(id== 2)
          alert('2')
          if(id== 3)
          alert('3')
          if(id== 4)
          alert('4')
               }


               checkQuestion1(){

                if( document.getElementById("answer").value==1)
                
              alert( 'الأجابة صحيحة أحسنت');

              else 
              alert( 'مع الاسف الاجابة خاطئة  ');

                
                }
                
               
               checkQuestion2(){
                if( document.getElementById("answer").value==2)
                
                alert( 'الأجابة صحيحة أحسنت');
  
                else 
                alert( 'مع الاسف الاجابة خاطئة  ');
  
               }
               checkQuestion3(){
                if( document.getElementById("answer").value==3)
                
                alert( 'الأجابة صحيحة أحسنت');
  
                else 
                alert( 'مع الاسف الاجابة خاطئة  ');
  
               }
               checkQuestion4(){
                if( document.getElementById("answer").value==4)
                
                alert( 'الأجابة صحيحة أحسنت');
  
                else 
                alert( 'مع الاسف الاجابة خاطئة  ');
  
               }

    render() {
        return (
            <div>
              




              <p id="questionstd">{this.state.name}</p>
<div  id="divstd" >



<div>

  

<table  width = '100%' >
  <tr width = '100%'>

 
    <th><p id="answrstd" onClick={this.checkQuestion1}  correct={this.state.answer}  >{this.state.option1}</p> </th>
    <th><p id="answrstd" onClick={this.checkQuestion2}  correct={this.state.answer}   >{this.state.option2}</p></th>
    <th><p id="answrstd"onClick={this.checkQuestion3}   correct={this.state.answer}  >{this.state.option3}</p></th>
    <th><p id="answrstd" onClick={this.checkQuestion4}  correct={this.state.answer}   >{this.state.option4}</p></th>
  </tr>
 
  </table>
  </div>
  <input type="hidden" id="answer" name="answer" value= {this.state.answer}></input>
  </div>
  
  <button className="btn btn-primary" onClick={this.nextQuestion}>السؤال التالي</button>

  
  
  <p id="nextstd"  onClick={this.nextQuestion}  > التالي</p>
                        
            </div>
        )
    }
}


export default ListQuestionComponent
