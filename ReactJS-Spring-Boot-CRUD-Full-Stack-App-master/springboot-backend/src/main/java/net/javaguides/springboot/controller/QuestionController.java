package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.model.Question;
import net.javaguides.springboot.repository.QuestionRepository;

@CrossOrigin
@RestController
//@RequestMapping("/api/v1/")

public class QuestionController {
	
	@Autowired
	private QuestionRepository questionRepository;
	
	
	// get employee by id rest api
		@GetMapping("/questions/level/{level}/{subject}")
		public List<Question>  getQuestionseByLevel(@PathVariable String level,@PathVariable String subject) {
			//return questionRepository.findAll();
			System.out.println("ffffffffffffffffffffffff"+level);
			System.out.println("ffffffffffffffffffffffff"+subject);
			return questionRepository.getQuestionseByLevelAndSubject(level,subject);
			//return questionRepository.getQuestionseByLevel(level);
			//return questionRepository.getQuestionseByLevelAndSubject(level);
		}
	
	
	// get all questions
	@GetMapping("/questions/level111111/")
	public List<Question> getAllQuestionslevel1(){
		
		return questionRepository.findAll();
		
		//return questionRepository.getQuestionseByLevel("level1");
	}	
	
	// get all questions
	//@GetMapping("/questions")
	//public List<Question> getAllQuestions(){
	//	return questionRepository.findAll();
//	}		
	
	// create question rest api
	@PostMapping("/questions")
	public Question createQuestion(@RequestBody Question question) {
		return questionRepository.save(question);
	}
	
	
	int o = 0 ;
	@GetMapping("/questions/id/")
	public ResponseEntity<Question> getLevel1QuestionById() {
		int min = 130;
	      int max = 135;
	      o = o +1 ;
	      long random_int = (int)Math.floor(Math.random()*(max-min+1)+min);
	      System.out.println("random_int="+random_int+ "o  ="+ o);
	      System.out.println("---------------------------------------");
	      Question question = questionRepository.findById(  random_int )
				.orElseThrow(() -> new ResourceNotFoundException("question not exist with id :" + 35));
		return ResponseEntity.ok(question);
	}
	
	// get question by id rest api
	@GetMapping("/questions/{id}")
	public ResponseEntity<Question> getQuestionById(@PathVariable Long id) {
		Question question = questionRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Question not exist with id :" + id));
		return ResponseEntity.ok(question);
	}
	
	// update question rest api
	
	@PutMapping("/questions/{id}")
	public ResponseEntity<Question> updateQuestion(@PathVariable Long id, @RequestBody Question questionDetails){
		Question question = questionRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Question not exist with id :" + id));
		
		question.setName(questionDetails.getName());
		question.setLevel (questionDetails.getLevel());
	
		
		Question updatedQuestion = questionRepository.save(question);
		return ResponseEntity.ok(updatedQuestion);
	}
	
	// delete question rest api
	@DeleteMapping("/questions/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteQuestion(@PathVariable Long id){
		Question question = questionRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Question not exist with id :" + id));
		
		questionRepository.delete(question);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
