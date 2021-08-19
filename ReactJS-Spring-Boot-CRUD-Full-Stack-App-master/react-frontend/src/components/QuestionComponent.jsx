import React, { Component } from 'react'

//import EmployeeService from '../services/EmployeeService'
import QuestionService from '../services/QuestionService';


class ListQuestionComponent extends Component {
    constructor(props) {

    
        super(props)
      
        this.state = {
          levelPara: this.props.match.params.level,
          fullName: this.props.match.params.fullName,
            questions: [] ,
              option1: '',
              option2: '' ,
              option3: '' ,
              option4: '' ,
              answer: '' ,
              level: '' ,
              id: '' ,
              subject: '' ,
              random: 0,
              points:0,
              indexquestion:0,
          }
        
          this.nextQuestion = this.nextQuestion.bind(this);
          this.previousQuestion = this.previousQuestion.bind(this);

        this.addEmployee = this.addEmployee.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
         this.deleteEmployee = this.deleteEmployee.bind(this);

         this.checkQuestion = this.checkQuestion.bind(this);

         this.handleClick = this.handleClick.bind(this);
         this.backHome = this.backHome.bind(this);
       this.checkQuestion1=this.checkQuestion1.bind(this);
       this.checkQuestion2=this.checkQuestion2.bind(this);
       this.checkQuestion3=this.checkQuestion3.bind(this);
       this.checkQuestion4=this.checkQuestion4.bind(this);
       this.shuffleArray=this.shuffleArray.bind(this);
    }

     shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
      
          // Generate random number
          var j = Math.floor(Math.random() * (i + 1));
                      
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
          
      return array;
   }
     

    handleClick() {
      const min = 4;
      const max = this.state.questions.length;
      const rand = min + Math.random() * (max - min);
     var  index= Math.round( rand) +1
     if(index => max){
      index= index-1;
     }
   // this.setState({ random:index });
   index = QuestionService.handleClickService(this.state.questions.length) ;
  // alert(this.state.questions.length)

   //alert(index)
   if(index == -1){
    index= 1;
   }

   this.setState({ random:index });

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
   this.handleClick();
  // alert('componentDidMount length ' + this.state.questions.length );
  // alert('componentDidMount levelPara ' + this.state.levelPara);
   QuestionService.getQuestionseByLevel(this.state.levelPara).then((res) => {
    this.setState({ questions: res.data});


 //this.setState({ questions:  this.shuffleArray(questions) });
  
   // alert( ' after componentDidMount length ' +this.state.questions.length);
});










      


    }


    addEmployee(){
      
      this.props.history.push('/next-question1/');
  }
  previousQuestion(){

 
    if(    this.state.indexquestion <= 1)
    {
     
      alert('لا يمكن الرجوع  ');
      return ; 

    }else{
    //  window.location.reload();
    this.setState({ indexquestion:this.state.indexquestion -1  
    });
      this.setState({ option1: this.state.questions[this.state.indexquestion-2 ].option1});
      this.setState({ option2: this.state.questions[this.state.indexquestion-2 ].option2});
      this.setState({ option4: this.state.questions[this.state.indexquestion-2 ].option4});
      this.setState({ option3: this.state.questions[this.state.indexquestion -2].option3});
      this.setState({ name: this.state.questions[this.state.indexquestion-2].name});
      this.setState({ answer: this.state.questions[this.state.indexquestion-2].answer});


      
      
  } 
       }



    nextQuestion(){
    
     // alert('componentDidMount length ' + this.state.fullName );

    //  alert('nextQuestion  ' +this.state.levelPara)
    document.getElementById('answrstd1').style.backgroundColor = "#afa40f";
    document.getElementById('answrstd2').style.backgroundColor = "#afa40f";
    document.getElementById('answrstd3').style.backgroundColor = "#afa40f";
    document.getElementById('answrstd4').style.backgroundColor = "#afa40f";
      this.handleClick()

    //  if(    this.state.indexquestion >= this.state.questions.length)

    if(    this.state.indexquestion >= 10)
      {
        alert(' انتهت   الأسئلة');
        return ; 

      }else {

    
      //  alert(this.state.random);
      
        this.setState({ option1: this.state.questions[this.state.random].option1});
        this.setState({ option2: this.state.questions[this.state.random].option2});
        this.setState({ option4: this.state.questions[this.state.random].option4});
        this.setState({ option3: this.state.questions[this.state.random].option3});
        this.setState({ name: this.state.questions[ this.state.random].name});
        this.setState({ answer: this.state.questions[this.state.random].answer});
        this.setState({ id: this.state.questions[this.state.random].id});

        if(    this.state.indexquestion < this.state.questions.length){
          this.setState({ indexquestion:this.state.indexquestion +1   
          })

        }
        

      

      ;
         
        
    }
    var downloadTimer
    clearInterval(downloadTimer);
    document.getElementById("progressBar").value = 50;
    var timeleft = 50;
    downloadTimer= setInterval(function(){
      if(timeleft <= 0){
        clearInterval(downloadTimer);
      }
      document.getElementById("progressBar").value = 50 - timeleft;
      timeleft -= 1;
    }, 1000);

           
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

                if( document.getElementById("answer").value==1) {
                  document.getElementById('answrstd1').style.backgroundColor = "green";
                  this.setState({ points:  this.state.points+10});
                 
                  this.setState({ points:  this.state.points+10});
                
              alert( 'الأجابة صحيحة أحسنت');
                }

              else {
               
              alert( 'مع الاسف الاجابة خاطئة  ');
              document.getElementById('answrstd1').style.backgroundColor = "red";
              
            
              }

                
                }
                
               
    checkQuestion2(){
      if( document.getElementById("answer").value==2) {
        document.getElementById('answrstd2').style.backgroundColor = "green";
        this.setState({ points:  this.state.points+10});
    alert( 'الأجابة صحيحة أحسنت');
      }

    else {
    alert( 'مع الاسف الاجابة خاطئة  ');
    document.getElementById('answrstd2').style.backgroundColor = "red";

    }
  
               }
               checkQuestion3(){
                if( document.getElementById("answer").value==3) {
                  document.getElementById('answrstd3').style.backgroundColor = "green";
                  this.setState({ points:  this.state.points+10});
              alert( 'الأجابة صحيحة أحسنت');
                }

              else {
              alert( 'مع الاسف الاجابة خاطئة  ');
              document.getElementById('answrstd3').style.backgroundColor = "red";

              }
  
               }
               checkQuestion4(){
               

                if( document.getElementById("answer").value==4) {
                  document.getElementById('answrstd4').style.backgroundColor = "green";
                  this.setState({ points:  this.state.points+10});
              alert( 'الأجابة صحيحة أحسنت');
                }

              else {
              alert( 'مع الاسف الاجابة خاطئة  ');
              document.getElementById('answrstd4').style.backgroundColor = "red";

              }
  
               }

               backHome(){
                this.props.history.push('/main/');
            }


            startTime(){
          
          }

    render() {
        return (
            <div>
               <progress length='300' class="progressBar"  value="0" max="50" id="progressBar">  </progress>
               <p id="home"   onClick={this.backHome} >   العودة للصفحة الرئيسية </p>
              
                         
              <p id="questionsnum">  رقم السؤال :  {this.state.indexquestion} </p>
           
              <p id="questionstd">{this.state.name}</p>

              
            
             
             
<div  id="divstd" >



<div>

  

<table  width = '100%' >
  <tr width = '100%'>

  
    <th><p id="answrstd1"  class = "answrstd" onClick={this.checkQuestion1}  correct={this.state.answer}  >{this.state.option1}</p> </th>
    <th><p id="answrstd2"   class = "answrstd" onClick={this.checkQuestion2}  correct={this.state.answer}   >{this.state.option2}</p></th>
    <th><p id="answrstd3"  class = "answrstd" onClick={this.checkQuestion3}   correct={this.state.answer}  >{this.state.option3}</p></th>
    <th><p id="answrstd4"   class = "answrstd" onClick={this.checkQuestion4}  correct={this.state.answer}   >{this.state.option4}</p></th>
  </tr>
 
  </table>



  <table  width = '100%' >
  <tr width = '100%'>

  
 
    
    <th> <p id="nextstd"  onClick={this.nextQuestion}  > التالي</p> 

    <p id="result"    >   النقاط :  {this.state.points} </p>
    
     <span> id :  {this.state.id} </span>  
    
    
  
     </th>
   
  </tr>
 
  </table>


 <Timer  init='0' />,

  </div>
  <input type="hidden" id="answer" name="answer" value= {this.state.answer}></input>
  </div>
  



                        
            </div>

            
        )
    }
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    clearInterval(this.interval);
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

//ReactDOM.render(
 
 // document.getElementById('timer-example')
//);



export default ListQuestionComponent
