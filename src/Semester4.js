import React from "react"
import { Text, View, FlatList, StyleSheet} from "react-native"

const semester_4 = () => {
	const C_list = [
		{name: "CSE 4305", key: '1'},
		{name: "CSE 4303", key: '2'},
		{name: "CSE 4307", key: '3'},
		{name: "CSE 4341", key: '4'},
		{name: "Math 4301", key: '5'},
		{name: "SWE 4309", key: '6'},
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