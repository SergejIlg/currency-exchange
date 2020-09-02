import React from 'react'
import ReactDOM from 'react-dom'
import AboutPage from '../components/AboutPage'

document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(
        <AboutPage />,
        document.body.appendChild(document.createElement('div')),
    )
})