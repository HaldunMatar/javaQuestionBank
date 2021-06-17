import axios from 'axios';
const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

//const EMPLOYEE_API_BASE_URL = "http://192.168.2.105:8080/api/v1/questions";
//const EMPLOYEE_API_BASE_URL = "http://192.168.1.101:8080/api/v1/questions";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
       // return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
       return axios.get(EMPLOYEE_API_BASE_URL + '/id/' );
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new EmployeeService()