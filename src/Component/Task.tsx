import { Circle, Trash, CheckCircle} from '@phosphor-icons/react'
import styles from './Task.module.css'



export interface TaskType{
    id: number;
    text: string;
    status: boolean;
}

interface TaskProps {
    task: TaskType;
    handleDeleteTask: (task:TaskType) => void;
    handleChangeStatusTask: (task:TaskType) => void;
}

export function Task({task, handleDeleteTask, handleChangeStatusTask}:TaskProps){

    const onDelete = () => handleDeleteTask(task);
    const onChangeStatus = () => handleChangeStatusTask(task);
    
    return(
        <div className={styles.task}>
            <button onClick={onChangeStatus}>
                {
                    task.status ? 
                        (<CheckCircle className={styles.checkCircle} size={24} weight="fill"/>) 
                    :
                        (<Circle className={styles.circle} size={24} weight="duotone"/>)
                }
            </button>
            <p className={task.status ? (styles.finished) : (styles.unfinished)}>
                {task.text}
            </p>
            
            <button onClick={onDelete}>
                <Trash className={styles.trash} size={24}/>
            </button>
        </div>
    )
}