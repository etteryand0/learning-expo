import {StyleSheet, Dimensions} from 'react-native';

export default styles = StyleSheet.create({
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