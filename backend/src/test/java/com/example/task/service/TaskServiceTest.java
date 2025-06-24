package com.example.task.service;

import com.example.task.entity.Task;
import com.example.task.repository.TaskRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.ANY)

public class TaskServiceTest {

    @Autowired
    private TaskRepository repository;

    @Test
    void createTask_ShouldSaveAndReturnTask() {
        Task task = new Task();
        task.setTitle("Test unitaire");
        task.setCompleted(false);

        Task saved = repository.save(task);

        assertThat(saved.getId()).isNotNull();
        assertThat(saved.getTitle()).isEqualTo("Test unitaire");
        assertThat(saved.isCompleted()).isFalse();
    }
}
