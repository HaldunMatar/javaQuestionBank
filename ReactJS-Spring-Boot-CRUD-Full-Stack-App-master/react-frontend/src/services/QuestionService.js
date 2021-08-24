import axios from 'axios';
const EMPLOYEE_API_BASE_URL = "http://QuestionsBank:8081/questions";
//const EMPLOYEE_API_BASE_URL = "http://192.168.1.106:8080/api/v1/questions";
//const EMPLOYEE_API_BASE_URL = "http://192.168.1.101:8080/api/v1/questions";

class QuestionService {

    getQuestionseByLevel(level,subect){
       // alert('getQuestionseByLevel'+subect);
      
        return axios.get(EMPLOYEE_API_BASE_URL +'/level/' + level+'/'+subect);
    }

    getQuestionsLevel(level){
      
        return axios.get(EMPLOYEE_API_BASE_URL+'/level/'+ level);
       
    }

   getQuestions(level){
        return axios.get(EMPLOYEE_API_BASE_URL+'/level/');
    }

    createQuestion(question){
        return axios.post(EMPLOYEE_API_BASE_URL, question);
    }

    getQuestionById(questionId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/id/');
    }

    updateQuestion(question, questionId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + questionId, question);
    }

    deleteQuestion(questionId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + questionId);
    }


    handleClickService(arrayLength) {
        
        const min = 1;
        const max = arrayLength;
     //   alert('max'+ max) ; 
        const rand = min + Math.random() * (max - min);
     //   alert(this.state.random )
  
       var  index= Math.round( rand) 
       if(index => max){
        index= index-1;
         }
 // alert(index) ; 
        return index ; 


      }


   
}

export default new QuestionService()