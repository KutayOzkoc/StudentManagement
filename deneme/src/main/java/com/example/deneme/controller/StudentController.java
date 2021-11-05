package com.example.deneme.controller;

import com.example.deneme.model.Student;
import com.example.deneme.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.print.attribute.standard.Media;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/api/v1")
@CrossOrigin
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("/students")
    public List<Student> getAllStudents(){
        return studentRepository.findAll();
    }//get all students

    @GetMapping("/students/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable(value = "id") long studentId){
        Student student = studentRepository.findById(studentId)
                .orElseThrow(()->new ResourceNotFoundException("Not Found"));
        return ResponseEntity.ok().body(student);
    }// get student by ID

    @DeleteMapping("/students/{id}")
    public ResponseEntity<Object> deleteStudent(@PathVariable(value = "id") long studentId)throws ResourceNotFoundException{
        Student student = studentRepository.findById(studentId)
                .orElseThrow(()->new ResourceNotFoundException("Not Found"));
        studentRepository.deleteById(studentId);
        return ResponseEntity.ok().build();
    }// deleteStudent

    @PutMapping("/students/{id}")
    public ResponseEntity<Student> updateStudent(@PathVariable(value = "id") long studentId, @Valid @RequestBody Student studentDetails) throws ResourceNotFoundException{
        Student student = studentRepository.findById(studentId)
                .orElseThrow(()->new ResourceNotFoundException("Not Found"));
        student.setFirstname(studentDetails.getFirstname());
        student.setLastname(studentDetails.getLastname());
        student.setEmail(studentDetails.getEmail());
        final Student updatedStudent = studentRepository.save(student);
        return ResponseEntity.ok(updatedStudent);
    }//update student

    @PostMapping("/students")
    public Student createStudent(@RequestBody Student student){
        return studentRepository.save(student);
    }// create single student

}
