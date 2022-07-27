import React from 'react';
import Taskitem from './taskItem';

const Tasks = ({tasks}) => {
    return (
        
     <ul>
      {tasks.map(task => (
          <Taskitem key={task.id} task={task}></Taskitem>
      ))}
     </ul>
        
    );
}

export default Tasks;
