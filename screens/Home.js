import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Image} from 'react-native-animatable';
import {FlatList} from 'react-native-gesture-handler';
import {MEAL_FILTERS} from './Data';
import Keys from './Keys';
import {useNavigation} from '@react-navigation/native';

const {app_ID, app_KEY} = Keys;

const Home = () => {

  const navigation = useNavigation();
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getTrendyRecipes();
    console.log('Home Screen');
  }, []);

  const getTrendyRecipes = () => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=food&app_id=${app_ID}&app_key=${app_KEY}`;
    console.log('API URL:', apiUrl);

    fetch(apiUrl, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(result => {
        console.log('Result:', result.hits);
        setRecipes(result.hits);
      })
      .catch(error => console.error('Fetch error:', error));
  };

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
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={MEAL_FILTERS}
          renderItem={({item}) => {
            return (
              <TouchableOpacity activeOpacity={0.7} style={styles.catogaryItem}>
                <View style={styles.card}>
                  <Image source={item.icon} style={styles.categoryIcons} />
                </View>
                <Text style={styles.flatlistTitle}>{item.title}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Text style={styles.categoryText}>Trendy Recipes</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={recipes}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity activeOpacity={0.7} style={styles.recipeItem} onPress={() =>
              navigation.navigate('Details', {recipe: item.recipe})
            } >
              <Image
                source={{uri: item.recipe.image}}
                style={styles.recipeImage}
              />

              <View style={[styles.transparentView, {borderRadius: 15}]}>
                <Text style={styles.recipeLabel}>{item.recipe.label}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
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
  },
  searchBar: {
    width: '90%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 35,
    alignSelf: 'center',
    top: '30%',
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
    color: 'grey', // Corrected from "Colors" to "color"
  },
  categoryText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    margin: 10,
  },

  catogaryItem: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  card: {
    width: '80%',
    height: '70%',
    backgroundColor: 'white',
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOpacity: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  categoryIcons: {
    width: 60,
    height: 60,
  },
  flatlistTitle: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 18,
    fontWeight: '600',
  },

  recipeItem: {
    width: 180,
    height: 220,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginLeft: 20,
    borderRadius: 10,
  },
  recipeImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  recipeLabel: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
};

export default Home;
