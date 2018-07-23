import React from 'react'

export default ({ error }) => (
    <span className='custom-message'>
        <h5 className="text-center red-text">{error}</h5>
    </span>
)