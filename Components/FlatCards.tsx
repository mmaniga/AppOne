import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headingText}>Flat Cards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.box1]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.box2]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.card, styles.box3]}>
                    <Text>Blue</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,

    },
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        margin: 8,
        borderRadius: 4,

    },
    box1: {
        backgroundColor: '#EF5354'
    },
    box2: {
        backgroundColor: '#50DBB4'
    },
    box3: {
        backgroundColor: '#5DA3FA'
    },
})