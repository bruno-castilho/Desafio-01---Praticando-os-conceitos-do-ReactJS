import { Empty } from './Empty';
import { Task, TaskType} from './Task'
import styles from './Tasks.module.css'



interface TasksProps {
    tasksList: TaskType[];
    tasksFinished: number;
    handleDeleteTask: (task:TaskType) => void;
    handleChangeStatusTask: (task:TaskType) => void;
}

export function Tasks({tasksList, tasksFinished, handleDeleteTask, handleChangeStatusTask}:TasksProps){

    return (
        <div className={styles.wrapper}>
            <section className={styles.info}>
                <div>
                    <span className={styles.created}>Tarefas criadas</span>
                    <span className={styles.number}>{tasksList.length}</span>
                </div>

                <div>
                    <span className={styles.completed}>Concluídas</span>
                    <span className={styles.number}>{tasksFinished}</span>
                </div>
            </section>


            <section className={styles.tasks}>
                { 
                    tasksList.length ? (
                        tasksList.map( task => {
                            return <Task 
                                        key={task.id}
                                        task={task}
                                        handleDeleteTask={handleDeleteTask}
                                        handleChangeStatusTask={handleChangeStatusTask}
                                    />
                        })
                    ) 
                    : (
                        <Empty/>
                    )
                }
                
            </section>

        </div>
    )
}