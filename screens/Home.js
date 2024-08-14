import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'react-native-animatable';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { FlatList } from 'react-native-gesture-handler';
import { MEAL_FILTERS } from './Data';

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
      <Text style={styles.categoryText}>Categories</Text> 
      <View style={styles.lowerView}>
      <FlatList horizontal showsHorizontalScrollIndicator={false} data={MEAL_FILTERS} renderItem={({item,index})=>{
        return(
          <TouchableOpacity style={styles.catogaryItem}>
            <View style={styles.card}>
              <Image source={item.icon} style={styles.categoryIcons}/>
            </View>
            <Text style={styles.flatlistTitle}>{item.title}</Text>
          </TouchableOpacity>
        );
      }}/>
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
  categoryText:{
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    margin: 10,
  },

  catogaryItem:{
    width: 120,
    height: 120,
    // backgroundColor: 'white',
    // borderRadius: 15,
    // shadowColor: 'rgba(0,0,0,0.4)',
    // shadowOpacity: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  
  },
  card:{
    width: '80%',
    height: '70%',
    backgroundColor: 'white',
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOpacity: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius  : 10,
  },
  categoryIcons:{
    width: 60,
    height: 60,
  },
  flatlistTitle:{
    alignSelf: 'center',
    marginTop: 10 ,
    fontSize: 18,
    fontWeight: '600',
  },
};

export default Home;
