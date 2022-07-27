import React, {useContext, useState} from 'react';
import { MyContext } from '../container/taskList';

const Addtask = () => {

    const dispatch = useContext(MyContext);

    const [text, setText] = useState('');


    const submit = (e) => {
        e.preventDefault()
        if(text) {
            dispatch({
                type: 'ADD', 
                payload: text
                
            })
        }

        setText('')

    }

    const change = (e) => {
        setText(e.target.value)

    }
    return (
    <form onSubmit={submit}>
        <input type="text" value={text} onChange={change} />
      </form>
    );
}

export default Addtask;
