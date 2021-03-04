import React, {useState, useEffect} from 'react';
import { 
  StyleSheet, 
  View, Text, 
  Button, Image, 
  ScrollView, Dimensions, Alert
} from 'react-native';
import MapView from 'react-native-maps';
import {Marker, Callout} from 'react-native-maps';
import * as Location from 'expo-location';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.home}>
      <Text>Home screen</Text>
      <View>
        <Button style={styles.submit} 
          title="Tour"
          onPress={() => navigation.navigate("Tour")}
        />
        <Button style={styles.submit}
          title="Map"
          onPress={() => navigation.navigate("Map")}
        />
      </View>
    </View>
  );
}

function Tour(props) {
  return (
    <View style={styles.card}>
        <Image style={styles.preview} source={{uri: props.image}} />
        <View style={styles.info}>
          <Text style={styles.description}>
            {props.text}
          </Text>
          <View style={styles.inter}>
            <View style={styles.iconWrap}>
              <Image style={styles.timeIcon} source={require('./assets/icons/time.png')} />
              <Text style={styles.detail}>{props.time} часов</Text>
            </View>
            <View style={styles.iconWrap}>
              <Image style={styles.ticketIcon} source={require('./assets/icons/ticket.png')} />
              <Text style={styles.detail}>От {props.price} Р</Text>
            </View>
          </View>
          <Button style={styles.submit} title="Оформить тур" />
        </View>
      </View>
  );
}

function TourScreen() {
  return (
    <ScrollView contentContainerStyle={styles.main}>
      <Tour 
        image="https://yktours.ru/uploads/16555d0cb50b6c534.jpg"
        text="Национальный природный парк «Ленские столбы», входящий в список Всемирного Наследия ЮНЕСКО, является визитной карточкой Якутии. Величественные скалы, возвышающиеся над великой сибирской рекой, стремятся посетить и гости, и жители республики. Для последних круиз выходного дня на теплоходах «Демьян Бедный» и «Михаил Светлов» прекрасная возможность отдохнуть от городской суеты, совместить отдых на природе с прекрасной развлекательной программой на борту лайнеров."
        time="46"
        price="0"
      />
      <Tour 
        image="https://yktours.ru/uploads/16555d0cb50b6c534.jpg"
        text="lorem ipsum dolor sit amet"
        time="80"
        price="1200"
      />
      <Tour 
        image="https://yktours.ru/uploads/16555d0cb50b6c534.jpg"
        text="Национальный природный парк «Ленские столбы», входящий в список Всемирного Наследия ЮНЕСКО, является визитной карточкой Якутии. Величественные скалы, возвышающиеся над великой сибирской рекой, стремятся посетить и гости, и жители республики. Для последних круиз выходного дня на теплоходах «Демьян Бедный» и «Михаил Светлов» прекрасная возможность отдохнуть от городской суеты, совместить отдых на природе с прекрасной развлекательной программой на борту лайнеров."
        time="46"
        price="0"
      />
      <Tour 
        image="https://yktours.ru/uploads/16555d0cb50b6c534.jpg"
        text="Национальный природный парк «Ленские столбы», входящий в список Всемирного Наследия ЮНЕСКО, является визитной карточкой Якутии. Величественные скалы, возвышающиеся над великой сибирской рекой, стремятся посетить и гости, и жители республики. Для последних круиз выходного дня на теплоходах «Демьян Бедный» и «Михаил Светлов» прекрасная возможность отдохнуть от городской суеты, совместить отдых на природе с прекрасной развлекательной программой на борту лайнеров."
        time="46"
        price="0"
      />
    </ScrollView>
  );
}

function MapScreen() {
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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tour" component={TourScreen} options={{title:"Туры"}} />
        <Stack.Screen name="Map" component={MapScreen} options={{title:"Карта"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '5%',
  },
  home: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    width: '85%',
    marginTop: '5%',
    borderRadius: 8,
  },
  preview: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  info: {
    flex: 1,
    padding: 20,
  },
  inter: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 20,
  },
  submit: {
    flex: 1,
    alignSelf: 'flex-end',
  },
  description: {
    fontSize: 14,
    paddingBottom: 20,
  },
  iconWrap: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  ticketIcon: {
    width: 30,
    height: 21,
  },
  timeIcon: {
    width: 21,
    height: 21,
  },
  detail: {
    fontSize: 22,
    color: '#409ef8',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});