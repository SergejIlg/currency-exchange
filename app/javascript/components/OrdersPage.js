import React from 'react'
import MainAppBar from './MainAppBar'
import "./OrdersPage.css";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'


class OrdersPage extends React.Component {
    state = {
        orders: []
    }
    componentDidMount() {
        const node = document.getElementById('orders')
        const orders = JSON.parse(node.getAttribute('data'))
        this.setState({orders: orders})
    }

    timeStamp = (val) => {
      let date = [val.substr(0, 10), val.substr(11, 8)]

      return date
    }


    render() {
      var col = "red"
        return (
            <>
                <MainAppBar />
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow style={{background: "white"}}>
                        <TableCell></TableCell>
                        <TableCell align="right"><div className="h1">Transaction ID</div></TableCell>
                        <TableCell align="right"><div className="h1">E-Currency OUT</div></TableCell>
                        <TableCell align="right"><div className="h1">EURO IN</div></TableCell>
                        <TableCell align="right"><div className="h1">Status</div></TableCell>
                        <TableCell align="right"><div className="h1">Generated Link</div></TableCell>
                        <TableCell align="right"><div className="h1">Date</div></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.orders.reverse().map((row) => (
                        <TableRow key={row.id}>
                          <TableCell><div className="h1">{row.id}</div></TableCell>
                          <TableCell align="right">{row.coingate_id}</TableCell>
                          <TableCell align="right">{row.e_currency} {row.sell}</TableCell>
                          <TableCell align="right">{row.euro} €</TableCell>
                          <TableCell align="right">
                            <span style={{paddingBottom: "5px",
                                          paddingTop: "5px",
                                          paddingLeft: "10px",
                                          paddingRight: "10px",
                                          borderRadius: 10,
                                          fontWeight: "bold",
                                          color: row.status != "pending" ? (row.status == "paid" ? "Green" : "Red") : "Blue",
                                          border: row.status == "paid" ? "2px solid green" : (row.status == "cancel" ? "2px solid red" : "")}}>
                                          {row.status.toUpperCase()}
                            </span>
                          </TableCell>
                          <TableCell align="right">
                            <Link href={row.url}>
                              Operation Link
                            </Link>
                          </TableCell>
                          <TableCell align="right"> <div style={{color: "black"}}>{this.timeStamp(row.created_at)[0]}</div>
                                                    <div style={{color: "grey"}}>{this.timeStamp(row.created_at)[1]}</div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>

            </>
        )
    }
}

export default OrdersPage
