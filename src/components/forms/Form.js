import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'


/** --------------- Form consist of search option to fetch movie and tv show ------------------ **/
/** ------------------------------------------------------------------------------------------- **/
const getStyles = makeStyles(theme => ({
    button: {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(1)
    },
    form: {
        marginTop: theme.spacing(8),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textField: {
        width: 500,
        marginRight: theme.spacing(1)
    },
    formControl: {
        minWidth: 200,
    }
}))

const Form = props => {
    const classes = getStyles()

    const handleChange = (event) => {
        props.onSearchTypeChange(event.target.value);
    };

    return (
        <form onSubmit={props.onSubmit} className={classes.form}>
            <TextField
                required
                className={classes.textField}
                label='Search'
                name='searchQuery'
                margin='normal'
                variant='outlined'
                onChange={e => props.onInputChange(e.target.value)} />

            <FormControl className={classes.formControl} variant="outlined" margin='normal'>
                <InputLabel>Search Type</InputLabel>
                <Select
                    native
                    onChange={handleChange}
                    label="Search Type">
                    <option value={'multi'}>Multi</option>
                    <option value={'movie'}>Movie</option>
                    <option value={'tv'}>Tv Series</option>
                </Select>
            </FormControl>
            <Button className={classes.button} variant='contained' color='primary' type='submit'>Search</Button>
        </form>
    )
}

export default Form