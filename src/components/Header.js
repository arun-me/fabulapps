import * as React from 'react';
import { Button, View,StyleSheet, Text, TouchableOpacity} from 'react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Entypo from '@expo/vector-icons/Entypo';

 export default function Header({ navigation }) {
  return (
<View>
    <View style={styles.header}>
    <View>
    <TouchableOpacity
onPress={()=>{
navigation.toggleDrawer()}}
    >
<SimpleLineIcons name='menu' size={30} color='black'/>
    </TouchableOpacity>
    </View>
    <View style={styles.title}>
      <Text style={{color:'white',fontSize:30}}>Fabulapps</Text>
      <Text style={{color:'white'}}>The power of Freedom!</Text>
    </View>
    <TouchableOpacity>
<Entypo name='dots-three-vertical' size={30} color='black'/>
    </TouchableOpacity>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  title:{
    justifyContent:'center',
    alignItems:'center',
  },
  header:{
    backgroundColor:'dodgerblue',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:15,
  }
});