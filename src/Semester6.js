import React from "react"
import { Text, View, FlatList, StyleSheet} from "react-native"

const semester_6 = () => {
	const C_list = [
		{name: "SWE 4601", key: '1'},
		{name: "CSE 4617", key: '2'},
		{name: "SWE 4637", key: '3'},
		{name: "CSE 4621", key: '4'},
		{name: "Math 4643", key: '5'},
		{name: "SWE 4603", key: '6'},
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

export default coursesem4;