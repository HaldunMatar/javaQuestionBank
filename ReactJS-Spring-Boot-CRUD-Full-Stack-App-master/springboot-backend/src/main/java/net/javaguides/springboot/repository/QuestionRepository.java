package net.javaguides.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Question;


public interface QuestionRepository  extends JpaRepository<Question, Long>{

	
	@Query("SELECT  q   FROM   Question  q    where   q.subject != 'chemistry'  and   q.level = :level  ")
	List<Question> getQuestionseByLevel(@Param("level") String level);

	@Query("SELECT  q   FROM   Question  q    where   q.subject != 'chemistry'  and   q.level = :level  and   q.subject = :subject  ")
	List<Question> getQuestionseByLevelAndSubject(String level, String subject);
	
	


}


