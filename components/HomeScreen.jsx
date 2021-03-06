import React from 'react';

import styles from './styles';
import { 
  View, Text, 
  Button
} from 'react-native';

export default function HomeScreen({ navigation }) {
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