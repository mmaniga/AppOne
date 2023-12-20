import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style= {[styles.card,styles.cardElevated]}>
        <Image
            source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/The_main_gateway_%28darwaza%29_to_the_Taj_Mahal.jpg'
            }}
            
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>

        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText : {},
    card:{},
    cardElevated:{},
    cardImage:{
        height:200
    },
    cardBody:{},

})