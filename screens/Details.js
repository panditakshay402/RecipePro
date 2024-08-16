import { View, Text,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler';

const Details = () => {

  const route = useRoute();
  return (
    <View style={styles.container}>
      <Image source={{uri:route.params.recipe.image}} style={styles.recipeImage} />
      <TouchableOpacity style={styles.backButtion}>

      </TouchableOpacity>
      <Text style={styles.title}>{route.params.recipe.label}</Text>
      <View>
        <FlatList data={route.params.recipe.ingredientLines} renderItem={({item}) => {
          return (
            <View>
              <Text>{item}</Text>
            </View>
          )
        }} />
        
      </View>
        </View>

  )
}

const styles = {
  container:{
    flex: 1,
  },
  recipeImage: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  backButtion: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 25,
    position: 'absolute',
    top: 30,
    left: 20,
  },
  title: {
    fontSize: 25,
    color: 'black',
    fontWeight: '500',
    // position: 'absolute',
    // top: 200,
    left: 10,
  },
}

export default Details