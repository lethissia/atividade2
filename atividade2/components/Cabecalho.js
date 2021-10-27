import React, { Component } from 'react'
import { View, Text} from 'react-native'

export default class Cabecalho extends Component {
    render() {
        return (
            <View>
                <Text style={{fontSize:24, fontWeight:'bold'}}>
                    {this.props.nome}
                </Text>
                <Text style={{fontSize:18}}>
                    {this.props.curso}
                </Text>
            </View>
        )
    }
}