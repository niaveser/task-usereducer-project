import React, {
    useState,
    useReducer,
    useContext,
    createContext,
  } from 'react';

import Addtask from '../pure/addTask';
import Filter from '../pure/filter';
import Tasks from '../pure/tasks';
  
  

export const MyContext = createContext(null);

  
  const initialTasks = [
    {
        id: new Date().getTime(), 
        description: "Tarea 1",
        completed: false
    }
  ];
  
  const filterReducer = (state, action) => {
    switch (action.type) {
      case 'SHOW_ALL':
        return 'ALL';
      case 'SHOW_COMPLETED':
        return 'COMPLETED';
      case 'SHOW_ACTIVE':
        return 'ACTIVE';
      default:
        throw new Error();
    }
  };
  
  const taskReducer = (state, action) => {
    switch (action.type) {
      case 'COMPLETE':
        return state.map(task => task.id === action.payload.id ? action.payload : task )
      case 'REMOVE':
        return state.filter(task => task.id !== action.payload)   
      case 'ADD':
        return state.concat({
          description: action.payload,
          id: new Date().getTime(),
          complete: false,
        });
      default:
        throw new Error();
    }
  };
  
  const TaskListComponent = () => {

    const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL');
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);
  
    const filteredTasks = tasks.filter(task => {
      if (filter === 'ALL') {
        return true;
      }
  
      if (filter === 'COMPLETED' && task.completed) {
        return true;
      }
  
      if (filter === 'ACTIVE' && !task.completed) {
        return true;
      }
  
      return false;
    });
  
    return (
      <MyContext.Provider value={dispatchTasks}>
        <h1>Tasks List</h1>
        <Tasks tasks={filteredTasks}></Tasks>
        <Addtask></Addtask>
        <Filter dispatch={dispatchFilter}></Filter>
      </MyContext.Provider>
    );
  };

  export default TaskListComponent
  