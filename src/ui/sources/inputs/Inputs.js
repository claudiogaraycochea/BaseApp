import React from 'react';
import { TouchableOpacity, ScrollView, Image, TextInput, View } from 'react-native';
import styled, { css } from 'styled-components';

/* Input */
export const Input = styled.TextInput`
  backgroundColor: #FFFFFF;
  color: #222222;
  padding: 10px 20px;
  width: 100%
  font-size: 20px;
  border: 1px solid #E5E5E5;
  border-radius: 5px;
`;

/* Input */


export const InputTextArea = (props) => {
  const InputTextAreaContainer = styled.TextInput`
    backgroundColor: #FFFFFF;
    color: #222222;
    padding: 10px 20px;
    width: 100%
    height: 200px;
    font-size: 20px;
    border: 1px solid #E5E5E5;
    border-radius: 5px;
  `;
  return (
    <InputTextAreaContainer
      multiline
      numberOfLines={3}
      placeholder={props.placeholder}
    ></InputTextAreaContainer>
  )
}