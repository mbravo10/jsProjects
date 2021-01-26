import { nanoid } from 'nanoid';
import Todo from './components/Todo';
import FilterButton from './components/FilterButton';
import Form from './components/Form';
import React, { useState } from 'react';

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {

  const [tasks, setTasks] = useState(props.task);
  const [filter, setFilter] = useState('All');
  
  function toggleTaskCompleted(id){
    const updatedTasks = tasks.map(task => {
      if(id === task.id){
        return {...task, completed: !task.completed}
      }
      return task;
    })
    setTasks(updatedTasks);
  }

  function deleteTask(id){
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTasks(id, newName){
    const editedTask = tasks.map(task => {
      if(id === task.id){
        return {...task, name:newName }
      }
      return task;
    });
    setTasks(editedTask);
  }

  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map(task => (
    <Todo 
    id={task.id} 
    name={task.name} 
    completed={task.completed}
    key={task.id}
    toggleTaskCompleted={toggleTaskCompleted}
    deleteTask={deleteTask}
    editTasks={editTasks}
    />
    ));

    const filterList = FILTER_NAMES.map(name => (
      <FilterButton 
      key={name} 
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}/>
    ))
    
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
          {filterList}
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