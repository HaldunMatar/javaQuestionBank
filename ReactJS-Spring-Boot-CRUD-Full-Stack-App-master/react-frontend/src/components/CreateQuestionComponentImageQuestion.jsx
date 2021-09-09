import React, { Component } from 'react'
import QuestionService from '../services/QuestionService';
import { Link} from 'react-router-dom'



class CreateQuestionComponentImageQuestion  extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
          
            level:'' ,
            option1 : ' ' ,
            option2 : '' ,
            option3 : '' ,
            option4 : '' ,
            subject : '' ,
            answer : '' ,
        }
       
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            QuestionService.getQuestionById(this.state.id).then( (res) =>{
                let question = res.data;
                this.setState({name: question.name,
                    subject: question.subject,
                    level: question.level,
                    option1: question.option1,
                    answer: question.answer,
                    option2: question.option2,
                    option3: question.option3,
                    option4: question.option4,
                   

                    
                    
                 
                });
            });
        }        
    }
    saveOrUpdateQuestion = (e) => {

       

        if ( this.state.name == ""   ||  this.state.level  == ""  ||  this.state.option1  == "" ||
             this.state.subject == ""   ||  this.state.option2  == ""  ||  this.state.option3  == ""

             ||  this.state.option4    == "" ||   this.state.answer  == "" 
        ) {

            alert('الرجاء ملئ كل الحقول');

         

        }else {
        e.preventDefault();
        let question = {name: this.state.name, 
            level: this.state.level 
        ,  option1:this.state.option1,
         answer:this.state.answer,
        
        subject: this.state.subject,
        option2: this.state.option2,
        option3: this.state.option3,
        option4: this.state.option4,
      
        
        
        };
        console.log('question => ' + JSON.stringify(question));

        // step 5
        if(this.state.id === '_add'){
            QuestionService.createQuestion(question).then(res =>{
                  
                   alert('تمت اضافة السؤال برقم : '+ res.data.id);
               // this.props.history.push('/questions');
            });
        }else{
            QuestionService.updateQuestion(question, this.state.id).then( res => {
                this.props.history.push('/questions');
            });
        }

    }
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

  
    changeAnswerHandler= (event) => {
        this.setState({answer: event.target.value});
    }


    changeOption1Handler= (event) => {
        this.setState({option1: event.target.value});
    }


    changeOption2Handler= (event) => {
        this.setState({option2: event.target.value});
    }
    changeOption3Handler= (event) => {
        this.setState({option3: event.target.value});
    }
    changeOption4Handler= (event) => {
        this.setState({option4: event.target.value});
    }
  
    changeLevelHandler= (event) => {
        this.setState({level: event.target.value});
    }

    changeSubjectHandler= (event) => {
        this.setState({subject: event.target.value});
    }
 
    cancel(){
        this.props.history.push('/questions');
    }

    getTitle(){
        if(this.state.id === '_add'){


            return  <p id="questionsnum">  اضافة سؤال  </p>
            
           
        }else{
            return <h3 className="text-center">Update Question</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div >
                        <div>
                            <div >
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">

                                        
                                            <label id='questionlabel'>  image نص السؤال: </label>
                                            <input placeholder=" Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                       
                                     

                                        <div className = "form-group">
                                            <label id='questionlabel' > المستوى: </label>
                                            <select placeholder="Level" name="level" className="form-control" 
                                                value={this.state.level} onChange={this.changeLevelHandler} >
                                                     <option  selected  value="0">-----</option>
                                                <option    value="level1">المستوى الأول</option>
                                              <option value="level2">المستوى الثاني</option>
 
                                                      </select>
                                        </div>

                                        <div className = "form-group">
                                            <label id='questionlabel' > المادة: </label>
                                            <select placeholder="subject" name="subject" className="form-control" 
                                                value={this.state.subject}  onChange={this.changeSubjectHandler}  >
                                                      <option  selected  value="0">-----</option>
                                                <option   value="math">  الرياضيات  </option>
                                                <option value="physics">  القيزياء  </option>
                                              <option value="it">  المعلوماتية </option>
                                              <option value="turkish"> turkce  </option>
                                              <option value="history"> التاريخ  </option>
                                              
                                              <option value="geography"> الجغرافيا  </option>
                                              <option value="science">  العلوم </option>
                                              <option value="chemistry">  الكيماء </option>
                                              <option value="culture"> الثقافة و التربية الاجتماعية   </option>
                                              <option value="arabic">   اللغة العربية </option>
                                              <option value="english"> اللغة الانكليزية  </option>
                                              <option value="art">   الفنون</option>
                                              <option value="sport"> الرياضة  </option>
                                              <option value="islam">الاسلامية   </option>


 




                                                      </select>
                                        </div>
            

                                 
                                    <div id="block_container"> 
                                        <div className = "form-group">
                                            <label id='questionlabel'  > الخيار 1: </label>
                                            <input placeholder="Option1" name="option1" className="form-control" 
                                                value={this.state.option1} onChange={this.changeOption1Handler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label id='questionlabel' > الخيار 2 : </label>
                                            <input placeholder="Option2" name="option2" className="form-control" 
                                                value={this.state.option2} onChange={this.changeOption2Handler}/>
                                        </div>

                                       

                                        <div className = "form-group">
                                            <label id='questionlabel' > الخيار 3 : </label>
                                            <input placeholder="Option3" name="option3" className="form-control" 
                                                value={this.state.option3} onChange={this.changeOption3Handler}/>
                                        </div>


                                        <div className = "form-group">
                                            <label id='questionlabel' > الخيار 4 : </label>
                                            <input placeholder="Option4" name="option4" className="form-control" 
                                                value={this.state.option4} onChange={this.changeOption4Handler}/>
                                        </div>


                            </div>

                            <div className = "form-group">
                                            <p  id='questionlabel'  >  فقط رقم الاجابة الصحصيحة (1أو 2 أو 3 أو 4 )  بهذا الشكل    رقم الاجابة الصحيحة </p>
                                            <input placeholder="answer" name="answer" className="form-control" 
                                                value={this.state.answer} onChange={this.changeAnswerHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateQuestion}>Save</button>
                                        <button className="btn btn-danger" >Cancel</button>
                                        <Link  to="/main"  id="questionsnum">   العودة للصفحة الرئيسية   </Link>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
           
              

            </div>
        )
    }
}

export default CreateQuestionComponentImageQuestion
