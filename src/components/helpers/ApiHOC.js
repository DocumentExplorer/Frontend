import React from 'react'

const ApiHOC = ({ test, component: Component, ...data }) => {
    console.log(test)
    return (
        test === true
            ? <Waiting />
            : <Component {...data} test={test} />
    )
}
const Waiting = () => (
    <div className="waiting">Proszę czekać...</div>
)


export default ApiHOC