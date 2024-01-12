import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const RenderC = () => {
  return (
    <View>
      <Text style={styles.text}>C</Text>
    </View>
  )
}

export default RenderC

const styles = StyleSheet.create({
    text: {
        fontSize: hp(2),
        marginBottom: hp(5)
    }
})