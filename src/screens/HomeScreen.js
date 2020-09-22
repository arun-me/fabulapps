import * as React from 'react';
import { Button, View,StyleSheet, Text, TouchableOpacity} from 'react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Entypo from '@expo/vector-icons/Entypo';
 export default function HomeScreen({ navigation }) {
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
    <Text>
      <Text style={{color:'white',fontSize:30}}>Fabul</Text><Text style={{color:'pink',fontSize:30}}>apps</Text>
      </Text>
      <Text style={{color:'white'}}>The power of Freedom!</Text>
    </View>
    <TouchableOpacity>
<Entypo name='dots-three-vertical' size={30} color='black'/>
    </TouchableOpacity>
    </View>
    <Text adjustsFontSizeToFit={true} style={{marginHorizontal:50,marginVertical:200,fontSize:50}}>Do Or Die!</Text>
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