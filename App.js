import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, ImageBackground} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, } from "firebase/database";
import {Share_400Regular, Share_700Bold, useFonts} from '@expo-google-fonts/share';
import { 
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic 
} from '@expo-google-fonts/roboto'
import { ScrollView } from 'react-native-gesture-handler';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVfhL17PrN3r8s4Axvgxya2q-VE8uDpmo",
  authDomain: "tipcash-ae4d3.firebaseapp.com",
  projectId: "tipcash-ae4d3",
  storageBucket: "tipcash-ae4d3.appspot.com",
  messagingSenderId: "316084407441",
  appId: "1:316084407441:web:203b42a7175ebd005d0330"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const onRegister = (name, studentNumber, email, password) => {
  const db = getDatabase();
  const postListRef = ref(db, 'users');
  const newPostRef = push(postListRef);
  set(newPostRef, {
    name: name,
    studentNumber: studentNumber,
    email: email,
    password: password
  });
  Alert.alert('Register Successfully!');
}

function Login({ navigation }) {
  let [fontsLoaded, error] = useFonts({
    Share_400Regular,
    Share_700Bold,
    Roboto_100Thin,
    Roboto_700Bold_Italic,
    Roboto_100Thin_Italic,
  });

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImg} blurRadius={5} resizeMode='cover' source={require('./assets/image/Dots.jpg')}>
      <Text 
        style={styles.headerTitle}>TIPCash  
      </Text>
      <Image 
        style={styles.tipLogo} 
        source ={require('./assets/image/card.png')} />
      <StatusBar 
        style="auto" />
      <TextInput 
        style={styles.inputBox} 
        placeholder="TIP Email">
      </TextInput>
      <TextInput 
        style={styles.inputBox} 
        placeholder="TIP Password" 
        secureTextEntry>
      </TextInput>
      <TouchableOpacity 
        style={styles.btnLogin1} 
        onPress={()=>navigation.navigate("Home")}>
      <Text 
        style={styles.btnLogin}>Login
      </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.btnRegister1} 
        onPress={()=>navigation.navigate("Register")}>
      <Text style={styles.btnRegister}>Register
      </Text>
      </TouchableOpacity>
      </ImageBackground>
      </View>
  );
}

function Register({ navigation }){
  const[name, setName] = useState();
  const[studentNumber, setStudentNumber] = useState();
  const[email, setEmail] = useState();
  const[password, setPassword] = useState();

  return (
    <View 
      style={styles.container}>
        <ImageBackground style={styles.backgroundImg} blurRadius={5} resizeMode='cover' source={require('./assets/image/Dots.jpg')}>
      <Text 
        style={{
          fontSize:30, 
          color:'#ffc526',
          paddingVertical:70, 
          fontWeight:'bold'}}>Registration Form
      </Text>
      <TextInput 
        style={styles.inputBox} 
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        value={name}
        >
      </TextInput>
      <TextInput 
        style={styles.inputBox} 
        placeholder="Student Number"
        onChangeText={(text) => setStudentNumber(text)}
        value={studentNumber}>
      </TextInput>
      <TextInput 
        style={styles.inputBox} 
        placeholder="TIP Email"
        onChangeText={(text) => setEmail(text)}
        value={email}>
        </TextInput>
      <TextInput 
        style={styles.inputBox} 
        placeholder="TIP Password" 
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}>
        </TextInput>
      <TouchableOpacity style={styles.btnRegister1} onPress={()=>onRegister(name, studentNumber, email, password)}>
        <Text style={styles.btnRegister}>Register</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.btnLogin1} onPress={()=>navigation.navigate("Login")}>
        <Text style={styles.btnLogin}>Login</Text>
      </TouchableOpacity>
      </ImageBackground>
      </View>
  );
}

function Home({ navigation }){
  return (
    <View 
      style={styles.container}>
         <ImageBackground style={styles.backgroundImg} blurRadius={2} resizeMode='cover' source={require('./assets/image/222.jpg')}>
      <TouchableOpacity 
        style={styles.btnLogin1} 
        onPress={()=>navigation.navigate("AddBalance")}>
      <Text 
        style={styles.btnLogin}>Manage Balance
      </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.btnLogin1} 
        onPress={()=>navigation.navigate("ViewCode")}>
      <Text 
        style={styles.btnLogin}>View Code To Pay
      </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.btnLogin1} 
        onPress={()=>navigation.navigate("ReportProb")}>
      <Text 
        style={styles.btnLogin}>Report a Problem
      </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.btnLogin1} 
        onPress={()=>navigation.navigate("Login")}>
      <Text style={styles.btnLogin}>Logout
      </Text>
      </TouchableOpacity>
      </ImageBackground>
      </View>
  );
}

const MyFunction = () => Alert.alert('Amount Added Succesfully');

const MyFunction1 = () => Alert.alert('Insufficient Balance');

const MyFunction3 = () => Alert.alert('Claim your Money in TIP Registrar Office');

function AddBalance({ navigation }){

  const[balance, newBalance] = useState(0)
  const[amount, setAmount] = useState()

  function addTogether(){
    const Total = balance + amount;
    newBalance(Total);
    MyFunction();
  }

  function subTogether(){
    const Total = (balance < 0 && balance == 0) ? MyFunction1 : balance - amount;
    newBalance(Total);
    MyFunction3();
  }

    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImg} blurRadius={5} resizeMode='cover' source={require('./assets/image/222.jpg')}>
        <TextInput 
          style={styles.inputBox} 
          placeholder="Enter Amount" 
          keyboardType={'numeric'} 
          onChangeText={(text) => setAmount(Number.parseInt(text))}>
          </TextInput>
        <TouchableOpacity 
          style={styles.btnLogin1} 
          onPress ={addTogether}>
        <Text 
          style={styles.btnLogin}>Add Balance
          </Text>
          </TouchableOpacity>
        <TouchableOpacity 
          style={styles.btnLogin1} 
          onPress ={subTogether}>
        <Text 
          style={styles.btnLogin}>Withdraw
          </Text>
          </TouchableOpacity>
        <TouchableOpacity 
          style={styles.btnLogin1} 
          onPress={()=>navigation.navigate("CheckBalance", {newText: balance})}>
        <Text 
          style={styles.btnLogin}>Check Balance
          </Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.btnLogin1} onPress={()=>navigation.navigate("Home", {newText: balance})}>
          <Text style={styles.btnLogin}>Back</Text>
          </TouchableOpacity> 
          </ImageBackground>
          </View>
    );
}

function CheckBalance({ route, navigation}){
  const { newText } = route.params;
  return (
    <View style=
      {styles.container}>
        <ImageBackground style={styles.backgroundImg} blurRadius={5} resizeMode='cover' source={require('./assets/image/222.jpg')}>
      <Text 
        style={{
          color:'#ffc526',
          fontSize:30, 
          paddingVertical:150, 
          fontWeight:'bold'}}>
          Current Balance: {JSON.stringify(newText)} PHP
      </Text>
      <TouchableOpacity 
        style={styles.btnLogin1} 
        onPress={()=>navigation.navigate("AddBalance")}>
      <Text style=
        {styles.btnLogin}>
        Back
      </Text>
      </TouchableOpacity>
      </ImageBackground>
      </View>
  );
}

function ViewCode({ navigation }){
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImg} blurRadius={2} resizeMode='cover' source={require('./assets/image/222.jpg')}>
      <Text 
        style={{fontSize:30, fontWeight:'bold',color:'#ffc526'}}>
        Your Code is:
      </Text>
      <Text 
        style={{fontSize:20, textAlign:'center', color:'#ffc526'}}>
        R3fGH7X95iW
      </Text>
      <TouchableOpacity 
        style={styles.btnLogin1} 
        onPress={()=>navigation.navigate("Home")}>
      <Text 
        style={styles.btnLogin}>Back
      </Text>
      </TouchableOpacity>
      </ImageBackground>
      </View>
  );
}

const MyFunction2 = () => Alert.alert('We receive your issues, Sorry for inconvience, We are now fixing the issues.');
function ReportProb({ navigation }){
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImg} blurRadius={2} resizeMode='cover' source={require('./assets/image/222.jpg')}>
      <Text 
        style={{
          fontSize:20, color:'#ffc526', marginBottom: 10,
          fontWeight:'bold'}}>Share your issues or concern{"\n"}
      </Text>
      <TextInput 
        style={styles.inputBox} 
        placeholder="Name">
      </TextInput>
      <TextInput 
        style={styles.inputBox} 
        placeholder="Subject/Issue">
      </TextInput>
      <TextInput style={{
        width:350,
        height:250,
        marginVertical:10,
        backgroundColor:'#292827',
        borderRadius:25,
        paddingHorizontal:30,
        fontSize:20,
        color:"black"}} 
        placeholder="Message">
        </TextInput>
      <TouchableOpacity 
        style={styles.btnLogin1} 
        onPress={MyFunction2}>
      <Text 
        style={styles.btnLogin}>Submit
      </Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.btnLogin1} 
        onPress={()=>navigation.navigate("Home")}>
      <Text style={styles.btnLogin}>Back
      </Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
  );
}

const Stack = createNativeStackNavigator();
export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddBalance" component={AddBalance} />
        <Stack.Screen name="CheckBalance" component={CheckBalance} />
        <Stack.Screen name="ViewCode" component={ViewCode} />
        <Stack.Screen name="ReportProb" component={ReportProb} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    alignItems: 'center',
    justifyContent: 'center'
  },

  headerTitle: {
    fontFamily: 'Roboto_100Thin,',
    color: "#ffc526",
    marginVertical:40,
    borderColor:'#bdc3c7',
    fontSize:70,
    marginBottom: 10
  },

  tipLogo: {
    width:200,
    height:180,
    resizeMode:'contain',
    alignItems:'center',
    margin:15,
    marginBottom: 20,
    marginTop: 1,
  
  },

  tipLogo1: {
    width:500,
    height:180,
    resizeMode:'contain',
    alignItems:'center',
    margin:15,
    marginBottom: 20,
    marginTop: 1,
  
  },

  inputBox:{
    width:350,
    height:50,
    marginVertical:10,
    backgroundColor:'#292827',
    borderRadius:25,
    paddingHorizontal:30,
    fontSize:20,
    color:"#ffc526",
  },

  btnLogin:{
    fontFamily: 'Roboto_100Thin,',
    fontSize:16,
    fontWeight: 'bold',
    color:'black',
    textAlign:'center'
  },

  btnLogin1:{
    fontFamily: 'Roboto_100Thin,',
    width:350,
    backgroundColor: "#ffc526",
    borderRadius:25,
    color:"white",
    marginVertical: 10,
    paddingVertical: 16,
  },

  btn1:{
    fontFamily: 'Roboto_100Thin,',
    fontSize:16,
    fontWeight: 'bold',
    color:'#ffc526',
    textAlign:'center'
  },

  btnRegister:{
    fontFamily: 'Roboto_100Thin,',
    fontSize:16,
    fontWeight: 'bold',
    color:'#ffc526',
    textAlign:'center',
  },

  btnRegister1:{
    fontFamily: 'Roboto_100Thin,',
    width:350,
    backgroundColor:'#292827',
    borderRadius:25,
    color:"black",
    marginVertical: 10,
    paddingVertical: 16
  },

  backgroundImg:{
    flex: 1,
    justifyContent:'center',
    width: '100%',
    alignItems: 'center'
  }

});