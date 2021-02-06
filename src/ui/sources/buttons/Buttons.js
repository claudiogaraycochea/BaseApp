import React from 'react';
import { TouchableOpacity, ScrollView, Image, TextInput, View, Text, ImageBackground} from 'react-native';
import styled, { css } from 'styled-components';
import { Color } from '../colors/Colors';
import IconImageCompany from './../icons/IconImageCompany';

///////////////////////////
/* Button */

const getBgColor = (variant) => {
  switch(variant) {
    case 'primary':
      return Color.primary
    default:
      return Color.normal
  }
}

const getTextColor = (variant) => {
  switch(variant) {
    case 'primary':
      return Color.white
    default:
      return Color.white
  }
}

export const Button = (props) => {
  const ButtonContainer = styled.TouchableHighlight`
    background-color: ${props => (props.variant) ? getBgColor(props.variant) : Color.normal};
    padding: 6px 20px;
    width: 100%;
    border-color: ${props => (props.variant) ? getTextColor(props.variant) : Color.primary};
    border-radius: 5px;
    border-width: 1px;
    align-self: center;
  `
  const ButtonLabel = styled.Text`
    font-weight: 700;
    align-self: center;
    font-size: 16px;
    padding: 10px;
    font-size: 16px;
    color: ${props => (props.variant) ? getTextColor(props.variant) : Color.primary};
  `

  return (
    <ButtonContainer
      onPress={props.onPress}
      style={props.style}
      variant={props.variant}
    >
      <ButtonLabel variant={props.variant}>
        {props.children}
      </ButtonLabel>
    </ButtonContainer>
  );
};

/* / Button */

///////////////////////////
/* ButtonBox Items */
export const ButtonBoxItems = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

/* ButtonBox */

export const ButtonBox = (props) => {

  const ButtonBoxContainer = styled.TouchableHighlight`
    width: 48%;
    height: 220px;
    margin-bottom: 10px;
    position: relative;
    border-radius: 20px;
    background-color: ${Color.grayHighlight};
    display: flex;
    flex-direction: row;
  `;

  const ButtonBoxBottom = styled.View`
    align-self: flex-end;
    display: flex;
    flex-direction: column;
  `

  const ButtonBoxLabelImage = styled.View`
    background-color: ${Color.gray};
    width: 32px;
    height: 32px;
    margin-bottom: 5px;
    border-radius: 50px;
  `

  const ButtonBoxLabel = styled.Text`
    font-weight: 700;
    align-self: flex-end;
    font-size: 14px;
    color: ${Color.white};
    padding: 0 5px;
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
    border-radius: 20px;
  `

  return (
    <ButtonBoxContainer
      onPress={props.onPress}
      style={props.style}
      variant={props.variant}
    >
      <ImageBtnCompany 
        image={props.image}
      >
        <ButtonBoxBottom>
          <ButtonBoxLabelImage></ButtonBoxLabelImage>
          <ButtonBoxLabel variant={props.variant}>
            {props.children}
          </ButtonBoxLabel>
        </ButtonBoxBottom>
      </ImageBtnCompany>
    </ButtonBoxContainer>
  );
};

export const ImageBtnCompany = (props) => {

  const ImageBtnCompanyContainer = styled.ImageBackground`
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    padding: 20px 20px;
  `;

  if(props.image) {
    return (
      <ImageBtnCompanyContainer 
        style={{width: '100%', height: '100%'}}
        imageStyle={{ borderRadius: '20px'}}
        resizeMode='cover'
        source={{uri: props.image}}
      >
        {props.children}
      </ImageBtnCompanyContainer>
    )  
  }

  return (
    <ImageBtnCompanyContainer 
      style={{width: '100%', height: '100%'}}
      imageStyle={{ borderRadius: '20px'}}
      resizeMode='cover'
    >
      {props.children}
    </ImageBtnCompanyContainer>
  )

}

///////////////////////////
/* ButtonItems */
export const ButtonItems = styled.View`
  margin-bottom: 20px;
`;

/* ButtonBox */
export const ButtonItem = (props) => {

  const ButtonItemContainer = styled.TouchableHighlight`
    margin-left: -20px;
    margin-right: -20px;
    position: relative;
    borderTopColor: ${Color.grayHighlight};
    borderTopWidth: 1px;
    padding: 10px 20px;
  `;

  const ButtonItemContent = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `

  const ButtonItemLeft = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
  `

  const ButtonItemRight = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
  `

  const ButtonItemLabelImage = styled.View`
    width: 32px;
    height: 32px;
    margin-right: 10px;
  `

  const ButtonItemLabel = styled.Text`
    font-weight: 700;
    font-size: 16px;
    color: ${Color.text};
  `

  return (
    <ButtonItemContainer
      onPress={props.onPress}
      style={props.style}
      variant={props.variant}
    >
      <ButtonItemContent>
        <ButtonItemLeft>
          <ButtonItemLabelImage>{props.icon}</ButtonItemLabelImage>
          <ButtonItemLabel variant={props.variant}>
            {props.children}
          </ButtonItemLabel>
        </ButtonItemLeft>
        <ButtonItemRight>
          {props.iconAction}
        </ButtonItemRight>
      </ButtonItemContent>
    </ButtonItemContainer>
  );
};


///////////////////////////
/* ButtonItemCircle */

export const ButtonItemCircle = (props) => {
  const ButtonItemCircleLabel = styled.Text`
    font-weight: 700;
    align-self: center;
    font-size: 16px;
    color: ${Color.white};
  `

  const ButtonItemCircleContainer = styled.View`
    font-size: 16px;
    color: ${Color.text};
    width: 32px;
    height: 32px;
    background-color: ${Color.highlight};
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  `

  return (
    <ButtonItemCircleContainer
      onPress={props.onPress}
      style={props.style}
      variant={props.variant}
    >
      <ButtonItemCircleLabel>3</ButtonItemCircleLabel>
    </ButtonItemCircleContainer>
  );
}
