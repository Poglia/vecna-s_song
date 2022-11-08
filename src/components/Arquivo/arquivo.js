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

        // SEPARAR ARQUIVO

        // 49, 98, 89,31, 15,79,99,38,6,40,72,65,97,

        // let arquivos = [];
        let stringNotas = "";
        const fileNumber = 49;
        var strFileSeparate = '[';
        let sizeObj = Object.keys(contentObject).length

      let lastLetter = "";
      for (let i = 0; i < sizeObj; i++){
          if(contentObject[i].arq == fileNumber)
          {
            strFileSeparate += '{'
            strFileSeparate += '"ordem":' + contentObject[i].ordem + ","

            // verificar \ no ultimo caracter 
            lastLetter = contentObject[i].notas.slice(-1)
            
            if (lastLetter == "\\")
            {
              contentObject[i].notas += "\\"
            }

            strFileSeparate += '"notas":"' + contentObject[i].notas + '"'
            strFileSeparate += '},'
          }
          
      }

      strFileSeparate = strFileSeparate.substring(0, strFileSeparate.length - 1);
      strFileSeparate += ']';

      var objFileSeparate = JSON.parse(strFileSeparate)

      objFileSeparate.sort(function(a, b){
        if (a.ordem < b.ordem)
        {
          return -1
        }
        
        return true
      })

      console.log(objFileSeparate)

     }


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