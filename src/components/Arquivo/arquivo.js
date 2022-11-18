import {useState, useCallback } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './sArquivo';

import * as DocumentPicker from 'expo-document-picker';
import { FontAwesome } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import * as Linking from 'expo-linking';

// import * as Permissions from 'expo-permissions';
// import * as Locations from 'expo-location';
// import { Camera } from 'expo-camera';
// import * as RNFetchBlob from 'rn-fetch-blob';



export default function Arquivo(){
    const [fileResponse, setFileResponse] = useState([])
    const [grades, setGrades]             = useState(null)

    const resetarTela = () => {
      setGrades(null)
    }

    const donwloadFile = async () => {
      const fileUri = FileSystem.documentDirectory + 'teste/teste.pdf';
      const url = "https://www.soundczech.cz/temp/lorem-ipsum.pdf";
    
      let downloadObject = FileSystem.createDownloadResumable(
        url,
        fileUri
      );
      let response = await downloadObject.downloadAsync();
      console.log(response)
    }

    const salvarArquivo = async () => {
      let fsdd = FileSystem.documentDirectory + 'teste.txt'
     await FileSystem.writeAsStringAsync(fsdd, 'Teste primeiro', 
      {encoding: FileSystem.EncodingType.UTF8}).then(() => {
      }).catch((err) => {
        console.log("CATCH")
        console.log(err.message)


      })
      
    }

    const abrirBuscaArquivo = async () => {
        let result = await DocumentPicker.getDocumentAsync({
          copyToCacheDirectory: true 
        });

        let contentString = await FileSystem.readAsStringAsync(result.uri);
        let contentObject = JSON.parse(contentString)

        // NUMEROS POSSIVEIS PARA ARQUIVOS
        // 49, 98, 89, 31, 15, 79, 99, 38, 6, 40, 72, 65, 97

        const fileNumber    = 49;
        var strFileSeparate = '[';
        let sizeObj         = Object.keys(contentObject).length
        let strNotas     = "";

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

      sizeObj  = Object.keys(objFileSeparate).length
      for (let i = 0; i < sizeObj; i++) {
        strNotas += objFileSeparate[i].notas;
      }

      setGrades(strNotas)
      // console.log({grades})

     }

    return(
      <View style={styles.boxArquivo}>
      {grades == null ?
        <TouchableOpacity style={styles.view}
          onPress={() => {
              abrirBuscaArquivo()
            }}>
            <Text style={styles.textTitle}>Clique para</Text>
            <Text style={styles.textTitle}>encontrar o arquivo</Text>
            <FontAwesome style={styles.buttonUpload} name="file" size={70}></FontAwesome>
            
        </TouchableOpacity>
        : 
        <View style={styles.view}>
          <TouchableOpacity>
              <Text style={styles.textTitleElse}
               onPress={() => {
                donwloadFile()
              }}>Exportar Arquivo</Text>
          </TouchableOpacity>   
          <TouchableOpacity>
              <Text style={styles.textTitleElse}
              onPress={() => {
                resetarTela()
              }}>Voltar</Text>
          </TouchableOpacity>   
        </View>} 
      </View>
    )
}