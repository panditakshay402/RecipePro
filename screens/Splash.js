import {View, Text} from 'react-native';
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import logo from '../assets/images/logo3.png';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
const navigation = useNavigation();
useEffect(() => {
    setTimeout(() => {
        navigation.navigate('Home');
    }, 3000);
}, []);

  return (
      <View style={styles.container}>
        <Animatable.Image
          animation={'bounceIn'}
          source={logo}
          style={styles.logo}
        />
        <Animatable.Text animation={'slideInUp'} style={styles.text}>
          Recipe
        </Animatable.Text>
      </View>
  );
};
const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  text: {
    fontSize: 46,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
  },
  logo: {
    width: 200,
    height: 200,
    // borderRadius: 100,
  },
};

export default Splash;
