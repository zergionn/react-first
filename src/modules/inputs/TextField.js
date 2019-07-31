import React from 'react';

class TextField extends React.Component {
    renderEdit () {
        return (
            <div className="input-wrapper">
                <input className="input" type="text" placeholder={this.props.value}/>
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