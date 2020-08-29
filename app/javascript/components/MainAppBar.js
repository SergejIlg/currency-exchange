import React from 'react'
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
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { flexbox } from '@material-ui/system';

class MainAppBar extends React.Component {

    render () {
        return(
            <div>
                <AppBar position="static">
                <Toolbar>
                    <Button color="inherit">
                        <Typography variant="h6">
                            Exchange
                        </Typography>
                    </Button>

                    <Button color="inherit">
                        <Typography variant="h6">
                            Transactions
                    </Typography>
                    </Button>
               
                    <Button color="inherit">
                        <Typography variant="h6">
                            About
                    </Typography>
                    </Button>
                    
                </Toolbar>
                </AppBar>

            </div>
        )
    }
}

export default MainAppBar