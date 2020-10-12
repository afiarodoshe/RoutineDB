import React from "react"
import { Text, View, StyleSheet, Image} from "react-native"

const Profile = () => {
  return (
    <View style={styles.viewStyle}>
        <Image
                source = {require ('../../assets/IMG_5352.JPG')}
                style={styles.imageStyle}
        />
        <Text style = {styles.textStyle}>
            Name: Afia Muntakim Rodoshe{"\n"}
            Student ID: 170042029{"\n"}
            Room No: 406-nhr{"\n"}
            Email: afiamuntakim@iut-dhaka.edu{"\n"}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 22,
    color: "purple",
    alignSelf: "center",
  },
  viewStyle: {
    margin: 40,
    alignSelf: "center",
    backgroundColor: "lightblue"
  },
  imageStyle: {
    margin: 20,  
    height: 250,
    width: 250,
    alignSelf: 'center',
},
})

export default Profile