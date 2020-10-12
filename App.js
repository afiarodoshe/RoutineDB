import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./src/Screens/Home";
import Profile from "./src/Screens/Profile";
import Semesters from "./src/Screens/Semesters";
import FacultyList from "./src/Screens/FacultyList"
import semester_4 from "./src/Screens/Semester4"
import semester_5 from "./src/Screens/Semester5"
import semester_6 from "./src/Screens/Semester6"


const stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName="Home">
                <stack.Screen name="Home" component={Home}/>
                <stack.Screen name="Semesters" component={Semesters}/>
                <stack.Screen name="FacultyList" component={FacultyList}/>
                <stack.Screen name="Profile" component={Profile}/>
                <stack.Screen name="Semester4" component={semester_4}/>
                <stack.Screen name="Semester5" component={semester_5}/>
                <stack.Screen name="Semester6" component={semester_6}/>
5
            </stack.Navigator>
        </NavigationContainer>
    );
}

export default App;