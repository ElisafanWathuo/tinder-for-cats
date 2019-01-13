import React from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import Card from './Card';
import Axios from 'axios';

export default class Cat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        //   outOfCards: false
            cards: [
            ],
            yupCount: 0,
            nopeCount: 0,
        }
      }

      _storeData = async (key) => {
        if(key === 'yup'){
            
            try {
                await AsyncStorage.setItem('@MySuperStore:' + key , this.state.yupCount);
              } catch (error) {
                // Error saving data
              }
        }else {
            
            console.log('nopeCount == ' + this.state.nopeCount);
            try {
                await AsyncStorage.setItem('@MySuperStore:' + key , this.state.nopeCount);
              } catch (error) {
                // Error saving data
              }
        }
      }

      componentDidMount () {
        Axios.get('https://api.thecatapi.com/v1/images/search')
        .then(
            (response) => {
                response.data.map( cat => {
                    this.setState({cards: [{name: cat.id, image: cat.url}]});
                });
            }
        ).catch( (error) => {
            // console.log(error);
        } );
      }

      handleYup = () => {
        console.log("yup")
        this.setState({yupCount: this.state.yupCount + 1});
        this._storeData('yup');
        Axios.get('https://api.thecatapi.com/v1/images/search')
            .then(
                (response) => {
                    response.data.map( cat => {
                        this.setState({cards: [{name: cat.id, image: cat.url}]});
                        
                    });
                    
                }
            ).catch( (error) => {
                // console.log(error);
            } );
      }
     
      handleNope = () => {
        console.log("nope")
        this.setState({nopeCount: this.state.nopeCount + 1});
        this._storeData('nope');
        Axios.get('https://api.thecatapi.com/v1/images/search')
            .then(
                (response) => {
                    response.data.map( cat => {
                        this.setState({cards: [{name: cat.id, image: cat.url}]});
                        
                    });
                    
                }                
            ).catch( (error) => {
                // console.log(error);
            } );
      }

      

    render() {
      return (
        // <View style={styles.container}>
          <SwipeCards
            cards={this.state.cards}
            loop={false}
    
            renderCard={(cardData) => <Card {...cardData} />}
            // renderNoMoreCards={() => <NoMoreCards />}
            showYup={false}
            showNope={false}
    
            handleYup={this.handleYup}
            handleNope={this.handleNope}
            // cardRemoved={this.cardRemoved.bind(this)}
        />
        // </View>
      );
    }
  }