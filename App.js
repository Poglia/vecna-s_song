import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native';
// import RNFS from 'react-native-fs';

import Title from "./src/components/Title/title.js";
import Arquivo from "./src/components/Arquivo/arquivo";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground  
    source={require('./src/assets/Images/bg2.webp')} 
    style={styles.imageBg}
    imageStyle={{}}  
>
      <Title texto={'VECNA\'S SONG'}/>
      <Arquivo/>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageBg: {
    width: '100%', 
    height: '100%',
    // opacity: 0.5
  }
});
