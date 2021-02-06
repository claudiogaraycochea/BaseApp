import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Row, Input, Button } from '../../../ui/UILib';

import { useSelector, useDispatch } from 'react-redux';
import { setFirstname } from "../../../store/actions/actions";

export default function Login(props) {
  // const { navigate } = props.navigation;
  const { firstname } = useSelector(state => state.userConstructor);
  
  const dispatch = useDispatch();

  const [email, setEmail] = useState("computadoraweb@gmail.com");
  const [password, setPassword] = useState("321Demo$");

  const handleSubmit = async () => {
    console.log('>>>>>>>>>>> handleSubmit: firstname: ', firstname);

    //navigate path below to navigate it to next screen
  };

  return (
    <Container style={styles.container}>
      <Row>
        <Text>Login</Text>
      </Row>
      <Row>
        <Input
          ref={() => {}}
          name="email"
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder="Email"
        />
      </Row>
      <Row>
        <Input
          ref={() => {}}
          name="password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder="Password"
        />
      </Row>
      <Row>
        <Button variant="primary" onPress={handleSubmit}>
          Login
        </Button>
      </Row>
      <Row>
        <Button variant="primary" onPress={() => dispatch(setFirstname('Nombre 2'))}>
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