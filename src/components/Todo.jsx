import AddTaskForm from "./AddTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import TodoInfo from "./TodoInfo.jsx";
import TodoList from "./TodoList.jsx";

const Todo = () => {
    const tasks = [
        {id: 'task-1', title: 'Cum', isDone: false},
        {id: 'task-2', title: 'Goon', isDone: true},
    ]

    const deleteAllTasks = () => {
        console.log('delete all')
    }

    const deleteTask = (taskId) => {
        console.log(taskId)
    }

    const toggleTaskComplete = (taskId, isDone) => {
        console.log(`Task ${taskId} is ${isDone ? `completed` : `not completed`}`)
    }

    const filterTasks = (query) => {
        console.log({query})
    }

    const addTask = () => {
        console.log('task created')
    }

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm addTask={addTask}/>
            <SearchTaskForm
                onSearchInput={filterTasks}
            />
            <TodoInfo
                total={tasks.length}
                done={tasks.filter(( {isDone} ) => isDone).length}
                onDeleteAllButtonElement={deleteAllTasks}
            />
            <TodoList
                tasks={tasks}
                onDeleteTaskButtonClick={deleteTask}
                onTaskCompleteChange={toggleTaskComplete}
            />
    </div>
    )
}

export default Todo