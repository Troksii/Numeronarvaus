import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [score, setScore] = useState('0');
  const [message, setMessage] = useState('Guess a number between 1 - 100');

  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1)

  const buttonPressed= () => {

    if (input < number) {
        setMessage('Your guess ' + input + ' is too low.');
        setScore(parseInt(score) + 1);
        
    } else if (input > number) {
        setMessage('Your guess ' + input + ' is too high.');
        setScore(parseInt(score) + 1);
        
    } else {
       Alert.alert('You guessed the number in ' + score + ' guesses');
       setNumber(Math.floor(Math.random() * 100) + 1);
       setScore('0');
       setInput('');
       setMessage('Guess a number between 1 - 100');
  }
};

  return (
    <View style={styles.container}>
      <Text> {message} </Text>
      <TextInput
      style={styles.input} 
      keyboardType= 'numeric'
      onChangeText={(input) => setInput(input)}
      value={input}
    />
    <Button onPress= {buttonPressed} title='MAKE GUESS' />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '30%',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white'
  }

});
