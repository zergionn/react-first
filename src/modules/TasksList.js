import React from 'react';
import Task from "./Task";
import TasksData from "../data/test.json";

class TasksList extends React.Component {
    state = {
        name: 'Tasks List 1',
        tasks: this.getTasksList()
    }

    getTasksList () {
        return TasksData
    }

    removeTask (index) {
        var tasks = this.state.tasks;

        tasks.splice(index, 1);
        this.setState({tasks: tasks})
    }

    renderTasks(task, index) {
        return (
            <Task task={task}
                  index={index}
                  key={task.title+index}
                  removeTask={this.removeTask.bind(this)}
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
            </div>
        );
    }
}

export default TasksList;