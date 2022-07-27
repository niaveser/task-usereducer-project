import React, { useContext} from 'react';
import { MyContext } from '../container/taskList';

const Taskitem = ({task}) => {

    const dispatch = useContext(MyContext);
    
    const change = () => {

        dispatch({
            type: 'COMPLETE',
            payload: {
                id: task.id,
                description: task.description,
                completed: !task.completed}
        })

    }

    const removeTask = () => {
        dispatch({
            type: 'REMOVE',
            payload: task.id
        })
    }
     return (
        
        <li>
        <label>
          {/*task.description*/}
          {task.completed ?
          <div style={{textDecoration:'line-through'}}>{task.description}</div>
          :
          <div>{task.description}</div>
}
          <button onClick={change}>Complete Task</button>
          <button onClick={removeTask}>Delete Task</button>
        </label>
      </li>
        
    );
}

export default Taskitem;
