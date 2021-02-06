import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { 
  Container, Row, TopCompany,
  H1, H2,
  Button, ButtonBoxItems, ButtonBox,
} from '../UILib';
import { setReduxVariable } from '../../store/actions';
import { Col } from '../sources/containers/Containers';

class StyleGuide extends Component {

  constructor(){
    super();
    this.state = {}
  }

  render() {
    return (
      <Container>
        <TopCompany>
          Testing
        </TopCompany>
        <View>
          <H1>Header 1</H1>
          <H2>Header 2</H2>
        </View>
        <View>
          <Row>
            <Button
              onPress={() => console.log('test')}
            >
              Normal
            </Button>
          </Row>
          <Row>
            <Button
              variant='primary'
              onPress={() => console.log('test')}
            >
              Primary
            </Button>
          </Row>
        </View>
        <View>
          <H2>ButtonBoxItems</H2>
          <ButtonBoxItems>
            <ButtonBox>Company Name</ButtonBox>
            <ButtonBox>Company Name</ButtonBox>
            <ButtonBox>Company Name</ButtonBox>
          </ButtonBoxItems>
        </View>
        <View>
          <H2>Row and Col</H2>
          <Row>
            <Col>
              <ButtonBox>Test</ButtonBox>
            </Col>
            <Col>
              <ButtonBox>Test</ButtonBox>
            </Col>
            <Col>
              <ButtonBox>Test</ButtonBox>
            </Col>
          </Row>
          <Row>
            <Col>
              <ButtonBox>Test</ButtonBox>
            </Col>
            <Col>
              <ButtonBox>Test</ButtonBox>
            </Col>
          </Row>
        </View>
      </Container>
    )
  }
};

const mapStateToProps = state => {
  return {
    userId: state.userId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setReduxVariable: (userId) => {
      return dispatch(setReduxVariable(userId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StyleGuide);