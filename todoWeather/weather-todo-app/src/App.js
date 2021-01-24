import { nanoid } from 'nanoid';
import Todo from './components/Todo';
import FilterButton from './components/FilterButton';
import Form from './components/Form';
import React, { useState } from 'react';

function App(props) {

  const [tasks, setTasks] = useState(props.task);
  
  function toggleTaskCompleted(id){
    const updatedTasks = tasks.map(task => {
      if(id === task.id){
        return {...task, completed: !task.completed}
      }
      return task;
    })
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  const taskList = tasks.map(task => (
    <Todo 
    id={task.id} 
    name={task.name} 
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
    />
    ));
    
    function addTask(name){
      const newTask = { id: "todo-" + nanoid(), name:name, completed:false };
      setTasks([...tasks, newTask]);
    }

  const taskNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${taskNoun} remaining`;
    
  return (
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>
        <Form addTask={addTask}/>
        <div className="filters btn-group stack-exception">
          <FilterButton name="All"/>
          <FilterButton name="Active"/>
          <FilterButton name="Completed"/>
        </div>
        <h2 id="list-heading">
          {headingText}
        </h2>
        <ul
          className="todo-list stack-large stack-exception"
        >
          {taskList}
        </ul>
      </div>
    );
  }

  export default App;