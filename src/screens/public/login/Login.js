import React, { useState } from 'react';
// returnimport { StyleSheet, Text, TextInput } from 'react-native';

import { View, KeyboardAvoidingView, TextInput, StyleSheet, Text, Platform, SafeAreaView, TouchableWithoutFeedback, Keyboard, ScrollView  } from 'react-native';

import { Container, Row, Input, Button } from '../../../ui/UILib';

import { useSelector, useDispatch } from 'react-redux';
import { setFirstname } from "../../../store/actions/actions";
import { getUsers, login } from "../../../store/actions/userActions";


export default function Login(props) {
  // const { navigate } = props.navigation;
  const { firstname, users, auth } = useSelector(state => state.userConstructor);
  
  const dispatch = useDispatch();
  const [email, setEmail] = useState('computadoraweb@gmail.com');
  const [password, setPassword] = useState('321Demo$');

  const handleSubmit = async () => {
    dispatch(login(email, password));
    //navigate path below to navigate it to next screen
  };

  console.log('>>>>>>>>>>>>>>>>>>>> Login.js auth: ', auth.AccessToken);
  return (
      <Container style={styles.container}>
        <Row>
          <Text>Login</Text>
          <View>
            {users.map( user => (
              <Text key={user.uid}>{user.email} {user.firstname}</Text>
            ))}
          </View>
        </Row>
        <Row>
          <Input
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
          />
        </Row>
        <Row>
          <Input
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />
        </Row>
        <Row>
          <Button variant="primary" onPress={handleSubmit}>
            Login
          </Button>
        </Row>
        <Row>
          <Button variant="primary" onPress={() => dispatch(setFirstname(email))}>
            Set Dispatch
          </Button>
        </Row>
        <Row>
          <Button variant="primary" onPress={() => dispatch(getUsers())}>
            Set Dispatch
          </Button>
        </Row>
      </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});