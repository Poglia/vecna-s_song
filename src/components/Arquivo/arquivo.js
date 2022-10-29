import {useState, useCallback } from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import styles from './sArquivo';

import * as DocumentPicker from 'expo-document-picker';
import { FontAwesome } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';


export default function Arquivo(){
    const [fileResponse, setFileResponse] = useState ([])

    const abrirBuscaArquivo = async () => {
        let result = await DocumentPicker.getDocumentAsync({
          copyToCacheDirectory: true 
        });

        let contentString = await FileSystem.readAsStringAsync(result.uri);
        let contentObject = JSON.parse(contentString)


        console.log(typeof(contentObject))
        for (let i =0; i< 10; i++)
        {
          console.log(contentObject[i])
        }
      }

        // readFile = async (MyPath) => {
        //     try {
        //       const path =MyPath+ "/rn.txt";
        //       const contents = await RNFS.readFile(path, "utf8");
        //       return("" + contents);
        //     } catch (e) {
        //       alert("" + e);
        //     }
        //   };

    return(
        <TouchableOpacity style={styles.boxArquivo}
        onPress={() => {
            abrirBuscaArquivo()
          }}>
           <Text style={styles.textTitle}>Clique para</Text>
           <Text style={styles.textTitle}>encontrar o arquivo</Text>
           <FontAwesome style={styles.buttonUpload} name="file" size={70}></FontAwesome>
           {/* <Text style={styles.textTitle}>{fileResponse}</Text> */}
           {/* <Button title="AppFilesDir" onPress={() => this.readFile(RNFS.ExternalDirectoryPath)} /> */}
         {/* <Button title="InternalStorageDir" onPress={() => this.readFile(RNFS.ExternalStorageDirectoryPath)} /> */}
        </TouchableOpacity>
    )
}