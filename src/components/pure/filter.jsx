import React from 'react';

const Filter = ({dispatch}) => {


    const showAllTasks = () => {
        dispatch({
            type: 'SHOW_ALL'
        })
    }

    const showCompletedTasks = () => {
        dispatch({
            type: 'SHOW_COMPLETED'
        })
    }

    const showActiveTasks = () => {
        dispatch({
            type: 'SHOW_ACTIVE'
        })
    }
    return (
        <div>
        <button type="button" onClick={showAllTasks}>
          Show All
        </button>
        <button type="button" onClick={showCompletedTasks}>
          Show Completed Tasks
        </button>
        <button type="button" onClick={showActiveTasks}>
          Show Active Tasks
        </button>
      </div>
    );
}

export default Filter;
