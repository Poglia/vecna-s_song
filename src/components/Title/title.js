import React from "react";
import {View, Text} from 'react-native';

import styles from './sTitle'

export default function Title(props){
    return(
        <View style={styles.boxTitle}>
           <Text style={styles.textTitle}>{props.texto}</Text>
        </View>
    )
}