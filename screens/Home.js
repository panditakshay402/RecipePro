import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'react-native-animatable';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.upperView}>
        <Image
          source={require('../assets/images/chef2.png')}
          style={styles.chef}
        />
        <View style={styles.transparentView}>
          <Text style={styles.logoText}>Recipe</Text>
          <TouchableOpacity activeOpacity={0.7} style={styles.searchBar}>
            <Image
              source={require('../assets/images/mgGlassImg.jpg')}
              style={styles.searchIcon}
            />
            <Text style={styles.searchText}>Please search Recipe here ...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = {
  container: {
    flex: 1,
  },

  upperView: {
    width: '100%',
    height: '35%',
  },

  chef: {
    width: '100%',
    height: '100%',
  },
  transparentView: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  logoText: {
    fontSize: 35,
    color: 'white',
    fontWeight: '600',
    position: 'absolute',
    marginTop: 5,
    left: 10,
    // textAlign: 'center',
  },
  searchBar: {
    width: '90%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 35,
    alignSelf: 'center',
    top: '30%',
    // marginTop: 20,
  },
  searchIcon: {
    width: 32,
    height: 30,
    position: 'absolute',
    top: 10,
    left: 12,
  },
  searchText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    top: 12,
    left: 50,
    Colors: 'grey',
  },
};

export default Home;
