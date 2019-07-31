import React from 'react';
import Task from "./Task";
import TasksData from "../data/test.json";

const defaultTaskTitle = 'Task Title';
const defaultTaskDesc = 'Task Description';

class TasksList extends React.Component {
    state = {
        name: 'Tasks List 1',
        tasks: this.getTasksList()
    }

    getTasksList () {
        return TasksData
    }

    addTask (title, desc) {
        var tasks = this.state.tasks;

        tasks.push({
            title: title,
            desc: desc
        });
        this.setState({tasks: tasks})
    }

    removeTask (index) {
        var tasks = this.state.tasks;

        tasks.splice(index, 1);
        this.setState({tasks: tasks})
    }

    updateTask (index, title, desc) {
        var tasks = this.state.tasks;

        tasks[index].title = title;
        tasks[index].desc = desc;
        this.setState({tasks: tasks});
    }

    renderTasks(task, index) {
        return (
            <Task task={task}
                  index={index}
                  key={task.title+index}
                  removeTask={this.removeTask.bind(this)}
                  updateTask={this.updateTask.bind(this)}
            />
        )
    }

    render () {
        return (
            <div className="tasks-container">
                <span className="title">{this.state.name}</span>
                <div className="list">
                    {this.state.tasks.map(this.renderTasks.bind(this))}
                </div>
                <button className="button -add" onClick={this.addTask.bind(this, defaultTaskTitle, defaultTaskDesc)}>Add +</button>
            </div>
        );
    }
}

export default TasksList;