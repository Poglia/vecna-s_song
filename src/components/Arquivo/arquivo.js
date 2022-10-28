import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import {useState, useCallback } from 'react';
import * as DocumentPicker from 'expo-document-picker';

import {text} from '../../assets/fileTest/songs13JSONvector(1)'


import styles from './sArquivo'
import { FontAwesome } from '@expo/vector-icons';

export default function Arquivo(){
    const [ fileResponse, setFileResponse ] = useState ([])

    const abrirBuscaArquivo = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        setFileResponse(result.uri)
        alert(result.file);
        console.log(result);
        }

        readFile = async (MyPath) => {
            try {
              const path =MyPath+ "/rn.txt";
              const contents = await RNFS.readFile(path, "utf8");
              return("" + contents);
            } catch (e) {
              alert("" + e);
            }
          };
    
        
      

    return(
        <TouchableOpacity style={styles.boxArquivo}
        onPress={() => {
            abrirBuscaArquivo()
          }}>
           <Text style={styles.textTitle}>Clique para encontrar arquivo</Text>
           <FontAwesome style={styles.buttonUpload} name="file" size={100}></FontAwesome>
           {/* <Text style={styles.textTitle}>{fileResponse}</Text> */}
           <Button title="AppFilesDir" onPress={() => this.readFile(RNFS.ExternalDirectoryPath)} />
         <Button title="InternalStorageDir" onPress={() => this.readFile(RNFS.ExternalStorageDirectoryPath)} />
        </TouchableOpacity>
    )
}