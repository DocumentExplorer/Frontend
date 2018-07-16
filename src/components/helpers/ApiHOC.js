import React from 'react'

const ApiHOC = (data, Component) => {
    console.log(props)
    return (
        data == undefined
            ? <Waiting />
            : <Component {...props} />
    )
}

const Waiting = props => (
    <div>Proszę czekać...</div>
)

export default ApiHOC