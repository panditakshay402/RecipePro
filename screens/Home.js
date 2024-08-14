import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'react-native-animatable';

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
          <TouchableOpacity style={styles.searchBar}>
            <Image
              source={require('../assets/images/mgGlassImg.jpg')}
              style={styles.searchIcon}
            />
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
    height: '40%',
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
  searchBar: {
    width: '90%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 35,
    alignSelf: 'center',
    top: '20%',
    // marginTop: 20,
  },
  searchIcon: {
    width: 32,
    height: 30,
    position: 'absolute',    
    top: 10,
    left: 12,
  },
};

export default Home;
