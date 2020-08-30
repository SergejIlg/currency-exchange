import React from 'react'
import ReactDOM from 'react-dom'
import SuccessPage from '../components/SuccessPage'

document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(
        <SuccessPage />,
        document.body.appendChild(document.createElement('div')),
    )
})