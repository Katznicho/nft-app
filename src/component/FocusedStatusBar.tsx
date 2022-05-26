import { StyleSheet, Text, View , StatusBar} from 'react-native'
import React from 'react'
//import useIsFocused hook
import { useIsFocused } from '@react-navigation/native';

const FocusedStatusBar = (props:any) => {
    const isFocused = useIsFocused();
  return isFocused? <StatusBar {...props}  animated={true}/> : null;
}

export default FocusedStatusBar

const styles = StyleSheet.create({})