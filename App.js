import React from 'react';
import { StyleSheet, View, Text, Button, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen({ navigation }) {
  return (
    <View style={styles.main}>
      <Text>Home screen</Text>
      <Button style={styles.submit} 
        title="Tour"
        onPress={() => navigation.navigate("Tour")}
      />
    </View>
  );
}

function TourScreen() {
  return (
    <ScrollView contentContainerStyle={styles.main}>
      <View style={styles.card}>
        <Image style={styles.preview} source={{uri: 'https://yktours.ru/uploads/16555d0cb50b6c534.jpg'}} />
        <View style={styles.info}>
          <Text style={styles.description}>Национальный природный парк «Ленские столбы», входящий в список Всемирного Наследия ЮНЕСКО, является визитной карточкой Якутии. Величественные скалы, возвышающиеся над великой сибирской рекой, стремятся посетить и гости, и жители республики. Для последних круиз выходного дня на теплоходах «Демьян Бедный» и «Михаил Светлов» прекрасная возможность отдохнуть от городской суеты, совместить отдых на природе с прекрасной развлекательной программой на борту лайнеров.</Text>
          <View style={styles.inter}>
            <View style={styles.iconWrap}>
              <Image style={styles.timeIcon} source={require('./assets/icons/time.png')} />
              <Text style={styles.detail}>46 часов</Text>
            </View>
            <View style={styles.iconWrap}>
              <Image style={styles.ticketIcon} source={require('./assets/icons/ticket.png')} />
              <Text style={styles.detail}>От 0 Р</Text>
            </View>
          </View>
          <Button style={styles.submit} title="Оформить тур" />
        </View>
      </View>
      <View style={styles.card}>
        <Image style={styles.preview} source={{uri: 'https://yktours.ru/uploads/16555d0cb50b6c534.jpg'}} />
        <View style={styles.info}>
          <Text style={styles.description} >Национальный природный парк «Ленские столбы», входящий в список Всемирного Наследия ЮНЕСКО, является визитной карточкой Якутии. Величественные скалы, возвышающиеся над великой сибирской рекой, стремятся посетить и гости, и жители республики. Для последних круиз выходного дня на теплоходах «Демьян Бедный» и «Михаил Светлов» прекрасная возможность отдохнуть от городской суеты, совместить отдых на природе с прекрасной развлекательной программой на борту лайнеров.</Text>
          <View style={styles.inter}>
            <View style={styles.iconWrap}>
              <Image style={styles.timeIcon} source={require('./assets/icons/time.png')} />
              <Text style={styles.detail}>46 часов</Text>
            </View>
            <View style={styles.iconWrap}>
              <Image style={styles.ticketIcon} source={require('./assets/icons/ticket.png')} />
              <Text style={styles.detail}>От 0 Р</Text>
            </View>
          </View>
          <Button style={styles.submit} title="Оформить тур" />
        </View>
      </View>
    </ScrollView>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tour" component={TourScreen} options={{title:"Туры"}} />
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
  }
});