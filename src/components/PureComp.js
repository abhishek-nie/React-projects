import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        return (
            <div>
                hello world pure component {this.props.name}
            </div>
        )
    }
}

export default PureComp
