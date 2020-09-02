import React from 'react'
import "./MainForm.css";
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Box from '@material-ui/core/Box'
import Checkbox from '@material-ui/core/Checkbox'
import { palette } from '@material-ui/system';
import { borders } from '@material-ui/system';
import { sizing } from '@material-ui/system';
import { spacing } from '@material-ui/system';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { positions } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import $ from "jquery"

class MainForm extends React.Component {

    state = {
        e_currency: 0.1,
        euro: "",
        sell: "BTC"
    };

    componentDidMount(){
        this.getRates(this.state.sell, true);
    }


    showProgress = () => {
        this.textInput.style.visibility = "visible"
    }

    submit = () => {
        this.request("create_order", "POST", {body: {e_currency: this.state.e_currency, euro: this.state.euro, sell: this.state.sell}})
        .then(response => {
            window.location = response.order.payment_url
        })
    }

    request = async (url = '', method = 'GET', options = {}) => {
        const node = document.getElementById('token')
        const authToken = node.getAttribute('data')

        let headers = {
            'Content-Type': 'application/json',
            'X-CSRF-Token': authToken,
        }

        let data = {
            method: method,
            headers: headers
        }

        if (options.body) {
            data.body = JSON.stringify(options.body)
        }

        const response = await fetch(url, data);
        return response.json();
    }

    calculate1 = (rate) => {
        //let new_rate = parseFloat(rate.rate)
        let outcome = this.state.e_currency / rate.rate
        this.setState({euro: outcome});
    }

    calculate2 = (rate) => {
        //let new_rate = parseFloat(rate.rate)
        let outcome = this.state.euro * rate.rate

        this.setState({e_currency: outcome});
    }

    getRates = (rt, opt) => {
        this.request(`rates?sell=${rt}`)
        .then(rate => {
          console.log(rate)
          this.textInput.style.visibility = "hidden"
            if(opt)
                this.calculate1(rate)
            else
                this.calculate2(rate)
        })
    }

    handleClick = () => {
        this.getRates(this.state.sell, true);
    };


    render () {
        return(
            <div align="center">
                <Box component="div" border={2} p={5} maxWidth={300}  minWidth={300} borderRadius={10} borderColor="black">
                    <Box  width="100%" bgcolor="info.main" m={-5} p={5} style={{borderTopLeftRadius: 6, borderTopRightRadius: 6, color: "white"}} >
                      <div className="h1">Currency Exchange</div>
                    </Box>
                    <Box component="div" height={80}></Box>
                    <CircularProgress ref={e => this.textInput = e} />
                        <div style={{ display: 'inline-flex' }}>
                            <div>
                                <TextField
                                    onChange={e => {
                                        this.setState({e_currency: e.target.value}, this.showProgress)
                                        this.getRates(this.state.sell, true)
                                    }}
                                    display="inline"
                                    id="e-currency"
                                    label="You send"
                                    type="number"
                                    value={this.state.e_currency}
                                    InputLabelProps={{ shrink: true, }} />
                            </div>
                            <div style={{ alignSelf: 'center' }}>
                                <InputLabel id="label">Currency</InputLabel>
                                <Select onChange={e => {
                                        this.setState({sell: e.target.value}, this.showProgress)
                                        this.getRates(e.target.value, true);
                                    }}
                                    labelId="label" id="select" value={this.state.sell}>
                                    <MenuItem value="BTC">BTC</MenuItem>
                                    <MenuItem value="LTC">LTC</MenuItem>
                                    <MenuItem value="BCH">BCH</MenuItem>
                                </Select>
                            </div>
                        </div>

                        <Box component="div" height={30} ></Box>

                        <div style={{ display: 'inline-flex' }}>
                        <div>
                            <TextField
                                onChange={e => {
                                    this.setState({euro: e.target.value}, this.showProgress)
                                    this.getRates(this.state.sell, false)
                                }}
                                display="inline"
                                id="e-currency"
                                label="You get approximately"
                                type="number" value={this.state.euro}
                                InputLabelProps={{ shrink: true, }} />
                        </div>
                            <div style={{ alignSelf: 'center' }}>
                                <InputLabel id="label">Currency</InputLabel>
                                <Select labelId="label" id="select" value="10">
                                    <MenuItem value="10">EUR</MenuItem>
                                </Select>
                            </div>
                        </div>

                <Box component="div" height={30} ></Box>

                <Button disabled={this.state.e_currency <= 0 || this.state.euro <= 0} onClick={this.submit} variant="contained" color="primary">Exchange currency now</Button>
                </Box>
            </div>
        )
    }
}

export default MainForm
