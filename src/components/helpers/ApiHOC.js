import React from 'react'

const ApiHOC = ({ test, component: Component, ...data }) => (
    test == true
        ? <Waiting />
        : <Component {...data} />

)

const Waiting = props => (
    <div className="waiting">Proszę czekać...</div>
)

export default ApiHOC