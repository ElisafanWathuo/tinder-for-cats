import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default class Card extends React.Component {
    constructor(props) {
      super(props);
    }
   
    render() {
        console.log("At Cards " + String(this.props.image));
      return (
        <View style={styles.card}>
          <Image style={styles.thumbnail} source={{uri: String(this.props.image)}} />
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    card: {
      alignItems: 'center',
      borderRadius: 5,
      overflow: 'hidden',
      borderColor: 'grey',
      backgroundColor: 'white',
      borderWidth: 1,
      elevation: 1,
    },
    thumbnail: {
      width: 300,
      height: 300,
    },
  })