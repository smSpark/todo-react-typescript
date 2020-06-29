import * as React from 'react';
import {TaskName} from "../types/taskType";

export interface Props {
    changeTask: (event: React.ChangeEvent<HTMLInputElement>) => void;
    addTask: (event: React.FormEvent<HTMLFormElement>, task: TaskName) => void;
    taskName: TaskName;
}

const NewTask: React.FC<Props> = ({taskName, addTask, changeTask}) => {
    return (
        <>
            <h1>Hello!</h1>
            <form onSubmit={(event)=>addTask(event, taskName)}>
                <input type='text' onChange={(event)=>changeTask(event)} value={taskName}/>
                <button type="submit">Add a task</button>
            </form>
        </>
    )
};

export default NewTask;
