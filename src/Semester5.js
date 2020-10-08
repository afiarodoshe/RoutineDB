import React from "react"
import { Text, View, FlatList, StyleSheet} from "react-native"

const semester_5 = () => {
        const C_list = [
            {name: "CSE 4403", key: '1'},
            {name: "CSE 4409", key: '2'},
            {name: "HUM 4411", key: '3'},
            {name: "CSE 4411", key: '4'},
            {name: "Math 4401", key: '5'},
            {name: "SWE 4403", key: '6'},
        ]

      return (
        <View style={styles.viewStyle}>
          <FlatList
            data={courses}
            renderItem={function ({ item }) {
              return <Text style={styles.textStyle}>{item.name}</Text>;
            }}
          />
        </View>
      )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "blue",
    marginVertical: 20,
  },
  viewStyle: {
    margin: 15,
},
})

export default coursesem5;