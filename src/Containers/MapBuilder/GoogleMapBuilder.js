import React, { Component } from 'react';
//import Aux from '../../hoc/Aux';
import SelectReact from 'react-select';
import classes from './GoogleMapBuilder.css';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';


const Countries = [
    {name: 'Afghanistan', code: 'AF'},
    {name: 'Åland Islands', code: 'AX'},
    {name: 'Albania', code: 'AL'}]

class GoogleMapBuilder extends Component{

    state = {
        autoComplete : null,
        countryCode : ''
    }

    handleChange = (e) => {
        console.log(e);
    }

    getGeoLocation = () => {
        let auto;
        let google = window.google;
    }

    handleChange = (e) => {
        console.log(e);
        this.setState({countryCode : e.target.value})
    }
    

    render(){

        let menu = Countries.map(country => {
            <MenuItem value={country.code}>country.name</MenuItem>
        })

        return(
            // <div style={{width : '500px'}}>
            //     <Select
            //     name="form-field-name"
            //     value={"this"}
            //     onChange={this.handleChange}
            //     options={Countries}  
            //     />
            // </div>
            <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Age</InputLabel>
            <Select
              value={this.state.countryCode}
              onChange={this.handleChange}
              inputProps={{
                name: 'age',
                id: 'age-simple',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
             {/* <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>*/}
            {menu}
            </Select>
          </FormControl>
        )
    }
}

export default GoogleMapBuilder;