import React from 'react'

export const OnActionHOC = ({ test, component: Component }) => (
    test ?
        ''
        : <Component />
)