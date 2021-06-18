import axios from 'axios';
//const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/questions";
const EMPLOYEE_API_BASE_URL = "http://192.168.1.106:8080/api/v1/questions";
//const EMPLOYEE_API_BASE_URL = "http://192.168.1.101:8080/api/v1/questions";

class QuestionService {

    getQuestionsLevel(level){
        return axios.get(EMPLOYEE_API_BASE_URL+'/' + level);
    }

    getQuestions(){
        return axios.get(EMPLOYEE_API_BASE_URL);
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

   
}

export default new QuestionService()