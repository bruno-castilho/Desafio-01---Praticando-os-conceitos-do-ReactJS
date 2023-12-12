import { useState } from 'react'
import { Header } from './Component/Header'
import { NewTask } from './Component/NewTask'
import { TaskType } from './Component/Task'
import { Tasks } from './Component/Tasks'
import './global.css'

export function App() {
  const [tasksFinished, setTasksFinished] = useState(0);
  const [tasksList, setTasksList] = useState<TaskType[]>([]);

  function CreateNewTask(task:TaskType){
    setTasksList([...tasksList, task]);
  }

  function handleDeleteTask(task:TaskType){
    const tasksListWithOutDeleteOne = tasksList.filter(t => {
      return t.id != task.id;
    })
    
    if(task.status) setTasksFinished(tasksFinished - 1);
    setTasksList(tasksListWithOutDeleteOne);
    console.log(task.status)
  }

  function handleChangeStatusTask(task:TaskType){
    task.status = !task.status;
    setTasksList(tasksList);

    if(!task.status)
      setTasksFinished(tasksFinished - 1);
    else 
      setTasksFinished(tasksFinished + 1);
    
  }

  return (
    <div>
      <Header/>
      <NewTask CreateNewTask={CreateNewTask}/>
      <Tasks 
        tasksList={tasksList} 
        tasksFinished={tasksFinished} 
        handleDeleteTask={handleDeleteTask}
        handleChangeStatusTask={handleChangeStatusTask}
      />
    </div>
  )
}

