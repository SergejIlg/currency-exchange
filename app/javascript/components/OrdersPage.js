import React from 'react'
import MainAppBar from './MainAppBar'

class OrdersPage extends React.Component {
    state = {
        orders: []
    }
    componentDidMount() {
        const node = document.getElementById('orders')
        const orders = JSON.parse(node.getAttribute('data'))
        this.setState({orders: orders})
    }

    render() {
        return (
            <>
                <MainAppBar />
                <div>{'Orders'}</div>
                <div>
                    <ul>
                        {this.state.orders.map(o => (
                            <li key={o.id}>
                                <span>
                                    {`ID: ${o.id} |`}
                                </span>
                                <span>
                                    {` e_currency: ${o.e_currency} |`}
                                </span>
                                <span>
                                    {` sell: ${o.sell} |`}
                                </span>
                                <span>
                                    {` euro: ${o.euro} |`}
                                </span>
                                <span>
                                    {` coingate_id: ${o.coingate_id} |`}
                                </span>
                                <span>
                                    {` status: ${o.status} |`}
                                </span>
                                <span>
                                    {` url: ${o.url} |`}
                                </span>
                                <span>
                                    {` created_at: ${o.created_at} |`}
                                </span>
                                <span>
                                    {` updated_at: ${o.updated_at}`}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    }
}

export default OrdersPage