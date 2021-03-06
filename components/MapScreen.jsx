import React, {useState, useEffect} from 'react';

import styles from './styles';
import arts from './arts';
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
    const [dots, setDots] = useState([]);
    
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
              <Callout style={{width:100}} onPress={() => setDots(calculateRoute(location))}>
                <View>
                  <Text style={{fontSize: 12}}>Click Me!</Text>
                </View>
              </Callout>
            </Marker>
            {
              dots.map((value, index)=> {
                return <Marker key={index} coordinate={{latitude:value[0],longitude:value[1],latitudeDelta: 0.0022,
                  longitudeDelta: 0.0421,}} />
              })
            }
        </MapView>
      </View>
    );
  }

function calculateRoute( location ) {
  const geotoolLATLNG = transform.default('EPSG:4326', '3857');
  const geotoolXY = transform.default('EPSG:3857', '4326')
    
  // https://www.npmjs.com/package/transform-coordinates
  // define start point
  const originPoint = geotoolLATLNG.forward({
    x: location.longitude, y: location.latitude
  });

  const metersCoefficient = 1000;  // meters coefficient to scale route sizes
  let art = [...arts.cup];  // copy art from ./arts.js to display it on map

  // list of ESPG:3857 dots to convert them to ESPG:4326 
  let dots = [
    [
      originPoint.x,
      originPoint.y
    ]
  ];

  // place every dot near to originPoint
  art.forEach(xy => {
    const x = xy[0] * metersCoefficient + originPoint.x;
    const y = xy[1] * metersCoefficient + originPoint.y;
    dots.push([x,y]);
  });
  dots.push([
    originPoint.x, originPoint.y
  ]); // come back to originPoint

  
  // convert XY coords to LATLNG
  let mapCoordinates = []
  dots.forEach(dot => {
    let coord = geotoolXY.forward({
      x: dot[0], y: dot[1]
    });

    mapCoordinates.push([coord.y, coord.x]) // format lat, lng
  });
  
  return mapCoordinates;
}