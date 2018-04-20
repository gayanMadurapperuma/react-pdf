import React, { Component } from 'react';
import classes from './GoogleMap.css';
import TextField from 'material-ui/TextField';

class GoogleMap extends Component{
    
    state = {
         autocomplete : null,
         
    }

    componentWillMount(){
        // let auto;
        // const default_value = 'Mirigama, Sri Lanka';
        // const google = window.google;
        // auto =  new google.maps.places.Autocomplete(default_value);
        // this.setState({autocomplete:auto});
    }

    componentDidMount(){

        window.initAutocomplete = this.initAutocomplete;
        loadJS('http://maps.googleapis.com/maps/api/js?key=AIzaSyCoXomD1_j0AE8Zu3aHREs_1IH-bVhkrIU&libraries=places&callback=initAutocomplete');
        
        console.log('Component did moutn');
        // const google = window.google;
        // const mpCenter = {
        //         lat : -34.397,
        //         lng: 150.644
        //     }
        // let map, marker;
        // map = new google.maps.Map(document.getElementById('map'), {
        //     zoom : 8,
        //     center: mpCenter 
        // });
        // marker = new google.maps.Marker({
        //     position:mpCenter,
        //     map : map,
        //     title : 'First'
        // });
        // const google = window.google;
        // let auto;
        // auto = new google.maps.places.Autocomplete(
        //     (document.getElementById('search')));
        //this.setState({autocomplete:auto});
            //autocomplete.addListener('Listner', this.getLocation(autocomplete));
        //let place = autocomplete.getPlace();
        //console.log(place);
    }

    initAutocomplete = () => {
        const google = window.google;
        console.log(google);
        let auto;
        auto = new google.maps.places.Autocomplete(
            (document.getElementById('search')),{types: ['geocode']});
            this.setState({autocomplete:auto})
            auto.addListener('place_changed', this.fillAddress)
            //console.log(this.state.autocomplete)
    }

    fillAddress = () => {
        let place = this.state.autocomplete.getPlace();
        console.log(place.address_components);
        const address = place.address_components;
        // let address_obj = {

        // };
        // address.map(add => {
        //     console.log(add);
        //     let sub_obj = {

        //     }
        // })
        const AddressPalce = {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()};
        this.showMap(AddressPalce);
    }

    showMap = (place) => {
        const google = window.google;
        let map;
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: place
          });
        let marker = new google.maps.Marker({
            position: place,
            map: map,
            title: 'Hello World!'
          });
  
    } 

    getLocate = () => {
        console.log('onfocus');

        
        // if(!place.geometry)
        //     alert('Fuck you');
        // console.log(place.geometry.location);

        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(function(position) {
        //       var geolocation = {
        //         lat: position.coords.latitude,
        //         lng: position.coords.longitude
        //       };
        //       var circle = new google.maps.Circle({
        //         center: geolocation,
        //         radius: position.coords.accuracy
        //       });
        //       autocomplete.setBounds(circle.getBounds());
        //     });
        //   }
    }

    getLocation = (auto) => {
        //const google = window.google;
        console.log('add')
        // setTimeout(() => {
        //     console.log('Get place info');
        //     let place = this.state.autocomplete.getPlace();
        //     console.log(place.geometry.location.lat(), place.geometry.location.lng());
        // }, 200);
        // let place = this.state.autocomplete.getPlace();
        // if(place === undefined){
        //     console.log('place undefine')
        // }
        
    }

    testEvent = (e) => {
        // if (e.key === 'Enter')
        // {
        //     setTimeout(() => {
        //         console.log('Get place');
        //         let place = this.state.autocomplete.getPlace();
        //         console.log(place);
        //     }, 200); 
        // }
    }
    
    render(){
        return(
            <div id="cnavasPrint">
                <TextField
                id="search"
                label="Search field"
                type="search"
                className={classes.textField}
                margin="normal"
                onKeyUp={(event) => this.testEvent(event)}
                />
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="name"
                    label="Name"
                    className={classes.textField}
                    // value={this.state.name}
                    //onChange={this.handleChange('name')}
                    margin="normal"
                />
                 <TextField
                    id="name"
                    label="State"
                    className={classes.textField}
                    // value={this.state.name}
                    //onChange={this.handleChange('name')}
                    margin="normal"
                />
                 <TextField
                    id="name"
                    label="Province"
                    className={classes.textField}
                    // value={this.state.name}
                    //onChange={this.handleChange('name')}
                    margin="normal"
                />
                 <TextField
                    id="name"
                    label="Country"
                    className={classes.textField}
                    // value={this.state.name}
                    //onChange={this.handleChange('name')}
                    margin="normal"
                />
            </form>    
            {/* <input id="autocomplete" placeholder="Enter your address"
            onFocus={this.getLocate} type="text"></input> */}
            {/* <button onClick={this.getLocation}>GetLocation</button> */}
        
                <div id="map" className={classes.mapSpace}></div>
            </div>
        );
    }
}

export default GoogleMap;

function loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
}