function TaskList({activeProject}){
    if(activeProject){
     return  <List />
    }
    else{
        return null;
    }
   
    function List(){
        return <ul className='task-list'>
        {activeProject.tasks.map((task,index)=>{
            return <li key={index}>{task.name}</li>
        })}
    </ul>
    }
}

export default TaskList;