package com.example.demo;

import java.util.List;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/kanban")
@RequiredArgsConstructor

public class TestController {
    private final ToDoServices toDoService;


    @GetMapping()
    public List<ToDo> findAllTodos(){
        return toDoService.getTodos();
    }

    @PostMapping()
    public void addToDo(@RequestBody ToDo todo){
        toDoService.addNew(todo);
    }

    @PutMapping("/next")
    public void moveToNextState(@RequestBody ToDo todo){
        toDoService.changeState(todo);
    }
    @PutMapping("/prev")
    public void setToPrevState(@RequestBody ToDo todo){
        toDoService.setBackState(todo);
    }


    @DeleteMapping(path ="{todoid}")
    public void removeToDoTask(@PathVariable String todoid){
        toDoService.deleteTask(todoid);
    }
    @GetMapping(path = "/{todoid}")
    public ToDo getTodoTask(@PathVariable String todoid){
        return toDoService.getTaskTodo(todoid);
    }
    @PutMapping()
    public void editTodoTask(@RequestBody ToDo todo){
        toDoService.editTaskAndDesc(todo);
    }


}