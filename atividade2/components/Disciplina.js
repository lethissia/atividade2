import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Disciplina extends Component {
    render() {
        return(
            <View>
            <Text style={{ fontSize: 16, fontWeight: 'italic' }}>
                {this.props.disciplina}
            </Text>
        </View>
        )
    }
}