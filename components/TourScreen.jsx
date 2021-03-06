import React, {useState, useEffect} from 'react';

import styles from './styles';
import { 
  View, Text, 
  Button, Image, 
  ScrollView
} from 'react-native';

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
              <Image style={styles.timeIcon} source={require('../assets/icons/time.png')} />
              <Text style={styles.detail}>{props.time} часов</Text>
            </View>
            <View style={styles.iconWrap}>
              <Image style={styles.ticketIcon} source={require('../assets/icons/ticket.png')} />
              <Text style={styles.detail}>От {props.price} Р</Text>
            </View>
          </View>
          <Button style={styles.submit} title="Оформить тур" />
        </View>
      </View>
  );
}

export default function TourScreen() {
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
