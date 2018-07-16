import React from 'react'

const ApiHOC = ({ test, component: Component, ...rest }) => {
    return (
        test == true
            ? <Waiting />
            : <Component {...rest}/>
    )
}

const Waiting = props => (
    <div>Proszę czekać...</div>
)

export default ApiHOC