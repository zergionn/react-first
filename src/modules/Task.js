import React from 'react';
import TextField from "./inputs/TextField";

class Task extends React.Component {
    state = {
        status: 'read'
    }

    remove () {
        this.props.removeTask(this.props.index);
    }

    setStatus (status) {
        this.setState({status: status})
    }

    renderActions () {
        switch (this.state.status) {
            case 'read':
            default:
                return (
                    <div className="actions">
                        <button className="button -edit" onClick={this.setStatus.bind(this, 'edit')}>Edit</button>
                        <button className="button -delete" onClick={this.remove.bind(this)}>Delete</button>
                    </div>
                )
            case 'edit':
                return (
                    <div className="actions">
                        <button className="button -save">Save</button>
                        <button className="button -cancel" onClick={this.setStatus.bind(this, 'read')}>Cancel</button>
                    </div>
                )
        }
    }

    render (props) {
        return (
            <div className="task-container">
                <TextField value={this.props.task.title} status={this.state.status}/>
                <TextField value={this.props.task.desc} status={this.state.status}/>
                {this.renderActions()}
            </div>
        );
    }
}

export default Task;
