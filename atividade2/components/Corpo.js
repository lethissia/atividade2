import React, {Component} from 'react'
import {Image,View} from 'react-native'

export default class Corpo extends Component{
    render(){
        let imagem = {uri:'https://i.pinimg.com/550x/11/90/b0/1190b0da93cbb03c35d609236cf676c9.jpg'}

        return(
            <Image 
            source={imagem}
            style={{width:150, height:150}}/>
        )
    }
}