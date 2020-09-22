import * as React from 'react';
import { Button, View,Text} from 'react-native';



export default function BillScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>6&6&6*
    </Text>
      <Button onPress={() => navigation.toggleDrawer()} title="Go back home" />
    </View>
  );
}