import React, { Component } from 'react'
import ContextB from './ContextB'
import { UserProvider } from './Context';

class ContextA extends Component {
    render() {
        return (
            <div>
                 <UserProvider value ="AK">
                 <ContextB />
                 </UserProvider>
              
            </div>
        )
    }
}

export default ContextA
