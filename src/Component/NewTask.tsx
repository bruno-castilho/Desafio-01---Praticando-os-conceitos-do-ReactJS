import { PlusCircle} from '@phosphor-icons/react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { TaskType } from './Task'
import styles from './NewTask.module.css'

interface NewTaskProps {
    CreateNewTask: (task:TaskType) => void;
}

export function NewTask({CreateNewTask}:NewTaskProps){
    const [counterId, setCounterId] = useState(0);
    const [inputTxt, setInputTxt] = useState('');

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault();
        setCounterId(counterId+1);
        CreateNewTask(
            {
               id: counterId,
               text: inputTxt,
               status: false
            }
        )
        setInputTxt('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
        setInputTxt(event.target.value);
    }

    const isInputEmpty = inputTxt.length == 0;
    return (
        <form className={styles.newTask} onSubmit={handleCreateNewTask}>
            <input  
                placeholder='Adicione uma nova tarefa' 
                name='task' 
                value={inputTxt}
                onChange={handleNewTaskChange}
                required
                />
            <button type='submit' disabled={isInputEmpty}>
                <span>Criar</span>
                <PlusCircle size={16}/>
            </button>
        </form>
    )
}