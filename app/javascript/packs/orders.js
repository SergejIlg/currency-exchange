import React from 'react'
import ReactDOM from 'react-dom'
import OrdersPage from '../components/OrdersPage'

document.addEventListener('DOMContentLoaded', () => {

    ReactDOM.render(
        <OrdersPage />,
        document.body.appendChild(document.createElement('div')),
    )
})