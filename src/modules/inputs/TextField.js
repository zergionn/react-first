import React from 'react';

class TextField extends React.Component {
    state = {
        value: this.props.value,
        status: this.props.status
    }

    changeValue (value) {
        this.setState({value: value})
    }

    renderEdit () {
        return (
            <div className="input-wrapper">
                <input className="input"
                       type="text"
                       placeholder={this.props.value}
                       onChange={(event) => this.changeValue(event.target.value)}/>
            </div>
        )
    }

    renderText () {
        return (
            <div className="text-wrapper">
                <span className="text">{this.props.value}</span>
            </div>
        )
    }

    render () {
        switch (this.props.status) {
            case 'edit':
                return this.renderEdit();
            case 'read':
            default:
                return this.renderText();
        }
    }
}

export default TextField;