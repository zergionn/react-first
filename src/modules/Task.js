import React from 'react';
import TextField from "./inputs/TextField";

class Task extends React.Component {
    state = {
        title: this.props.task.title,
        desc: this.props.task.desc,
        status: 'read'
    }

    remove () {
        this.props.removeTask(this.props.index);
    }

    update () {
        this.props.updateTask(this.props.index, this.refs.newTitle.state.value, this.refs.newDesc.state.value);
        this.setStatus('read');
    }

    cancelEdit () {
        this.setState({
            title: this.props.task.title,
            desc: this.props.task.desc,
            status: 'read'
        });
    }

    setStatus (status) {
        this.setState({status: status});
    }

    renderActions () {
        switch (this.state.status) {
            case 'read':
            default:
                return (
                    <div className="actions-wrapper">
                        <button className="button -edit" onClick={this.setStatus.bind(this, 'edit')}>Edit</button>
                        <button className="button -delete" onClick={this.remove.bind(this)}>Delete</button>
                    </div>
                )
            case 'edit':
                return (
                    <div className="actions-wrapper">
                        <button className="button -save" onClick={this.update.bind(this)}>Save</button>
                        <button className="button -cancel" onClick={this.cancelEdit.bind(this)}>Cancel</button>
                    </div>
                )
        }
    }

    render (props) {
        return (
            <div className="task-container">
                <TextField value={this.state.title}  ref="newTitle" status={this.state.status}/>
                <TextField value={this.state.desc}  ref="newDesc" status={this.state.status}/>
                {this.renderActions()}
            </div>
        );
    }
}

export default Task;
