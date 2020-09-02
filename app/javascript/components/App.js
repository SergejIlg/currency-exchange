import React from 'react'
import MainForm from './MainForm'
import MainAppBar from './MainAppBar'
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

class App extends React.Component {
    render () {
        return(
            <>
            <MainAppBar />

            <Box p={20}>
              <MainForm />
            </Box>
            </>
        )
    }
}

export default App
