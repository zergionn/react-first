import React from 'react';
import Task from "./Task";

class TasksList extends React.Component {
    state = {
        name: 'Tasks List 1',
        tasks: this.getTasksList()
    }

    getTasksList () {
        return [{
            title: 'Task1',
            desc: 'Description 1'
        },{
            title: 'Task2',
            desc: 'Description 2'
        },{
            title: 'Task3',
            desc: 'Description 3'
        },{
            title: 'Task4',
            desc: 'Description 4'
        },{
            title: 'Task5',
            desc: 'Description 5'
        },{
            title: 'Task6',
            desc: 'Description 6'
        },{
            title: 'Task7',
            desc: 'Description 7'
        }]
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