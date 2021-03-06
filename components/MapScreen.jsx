import React, {useState, useEffect} from 'react';

import styles from './styles';
import * as transform from 'transform-coordinates';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import {Marker, Callout} from 'react-native-maps';

import { 
    View, 
    Text, 
    Alert
} from 'react-native';

export default function MapScreen() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        location = location.coords;
        setLocation(location);
      })();
    }, []);
  
    let text = "Waiting...";
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    } else {
      return (<Text style={{flex:1,alignSelf:'center'}}>{text}</Text>);
    }
  
    const geotool = transform.default('EPSG:4326', '3857');
  
    geotool.forward({x:location.longitude, y:location.latitude}); // https://www.npmjs.com/package/transform-coordinates
  
    return (
      <View style={styles.main}>
        <MapView style={styles.map} 
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0022,
            longitudeDelta: 0.0421,
          }}>
            <Marker draggable 
              coordinate={location}
              onDragEnd={(e) => {setLocation(e.nativeEvent.coordinate); Alert.alert(`${location.latitude}, ${location.longitude}`)}}
            >
              <Callout style={{width:100}}>
                <View>
                  <Text style={{fontSize: 12}}>This is description</Text>
                </View>
              </Callout>
            </Marker>
        </MapView>
      </View>
    );
  }
  