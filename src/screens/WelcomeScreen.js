// import { View, Text, Pressable, SafeAreaView, StyleSheet } from 'react-native'
// import React, { useLayoutEffect } from 'react'

// const WelcomeScreen = ({ navigation }) => {
//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerShown: true,
//     })
//   }, [])

//   return (
//     <SafeAreaView style={styles.container}>
//       <View >
//         <Pressable
//           style={styles.loginButton}
//           onPress={() => navigation.navigate('Login')}>
//           <Text style={styles.loginText}>Login</Text>
//         </Pressable>
//         <Pressable
//           style={styles.signupButton}
//           onPress={() => navigation.navigate('Signup')}>
//           <Text style={styles.signupText}>Signup</Text>
//         </Pressable>
//       </View>
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   loginButton: {
//     backgroundColor: '#000',
//     borderRadius: 8,
//     padding: 12,
//     width: 200,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 5,
//     marginBottom: 24
//   },
//   signupButton: {
//     padding: 12,
//     width: 200,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loginText: {
//     fontSize: 16,
//     color: 'white',
//   },
//   signupText: {
//     fontSize: 16,
//     color: 'black',
//   },
// });



// export default WelcomeScreen