import React from 'react'

const ApiHOC = ({ test, component: Component, ...rest }) => (
    test == true
        ? <Waiting />
        : <Component {...rest} />

)

const Waiting = props => (
    <div className="waiting">Proszę czekać...</div>
)

export default ApiHOC