package com.example.task.service;

import com.example.task.entity.Task;
import com.example.task.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    private final TaskRepository repository;

    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    public List<Task> getAll() {
        return repository.findAll();
    }

    public Optional<Task> getById(Long id) {
        return repository.findById(id);
    }

    public Task create(Task task) {
        return repository.save(task);
    }

    public Task update(Long id, Task task) {
        task.setId(id);
        return repository.save(task);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
