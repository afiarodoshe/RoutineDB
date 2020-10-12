import React from "react"
import {View, StyleSheet, Button} from "react-native"

const Semesters = (props) => {
  return (
    <View style={styles.viewStyle}>
      <View style = {styles.buttonStyle}>
        <Button
          title="4th Semsester"
          onPress={function (){
            props.navigation.navigate("semester_4");
            }
          }
          color="cornflowerblue"
        /> 
      </View>

      <View style = {styles.buttonStyle}>
        <Button
          title="5th Semsester"
            onPress={function (){
              props.navigation.navigate("semester_5");
              }
            }
          color="cornflowerblue"
        />
      </View>

      <View style = {styles.buttonStyle}>
        <Button
          title="6th Semsester"
            onPress={function (){
              props.navigation.navigate("semester_6");
              }
          }
          color="cornflowerblue"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    color: "blue",
  },
  viewStyle: {
      marginHorizontal: 70,
      marginVertical: 50,
      backgroundColor: "lightblue" 
  },
  buttonStyle: {
    marginVertical: 60,
},
})

export default Semesters