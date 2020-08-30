import React from 'react'
import ReactDOM from 'react-dom'
import CancelPage from '../components/CancelPage'

document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(
        <CancelPage />,
        document.body.appendChild(document.createElement('div')),
    )
})