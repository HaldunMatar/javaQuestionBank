import React, { Component } from 'react'
import QuestionService from '../services/QuestionService';
import { Link} from 'react-router-dom'
class CreateImageQuestionComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: '',
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
  
    }
    saveOrUpdateQuestion = (e) => {
    }

    cancel(){
        this.props.history.push('/questions');
    }


    render() {
        return (
            <div>
                
                            
                               
                                    <form>
                                        <div className = "form-group">
                                            <label id='questionlabel'> نص السؤال: </label>
                                            <uploadingImageComponent>  </uploadingImageComponent>
                                                
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
        )
    }
}

export default CreateImageQuestionComponent 
