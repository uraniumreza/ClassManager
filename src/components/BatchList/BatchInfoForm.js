/**
 * Mobile Application :: Class Management System
 * Product Developed By: Nayeem Reza
 * Author: Nayeem Reza
 * https://bitbucket.org/uraniumreza/classmanager
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Content, Form, Item, Input } from 'native-base';

import FormStyles from '../Authentication/Styles';
import Styles from './Styles';

export default class BatchInfoForm extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {};

    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

  focusNextField(id) {
    this.inputs[id].wrappedInstance.focus();
  }

  render() {
    const {
      changeBatch, changeLevel, changeFee, batch, level, fee,
    } = this.props;
    return (
      <Content>
        <Form>
          <Item regular style={FormStyles.item}>
            <Input
              placeholderTextColor="#B6B2B2"
              placeholder="Batch Name"
              onChangeText={changeBatch}
              value={batch}
              blurOnSubmit={false}
              onSubmitEditing={() => {
                this.focusNextField('two');
              }}
              returnKeyType="next"
              ref={(input) => {
                this.inputs['one'] = input;
              }}
            />
          </Item>
          <View style={{ marginTop: 15 }} />
          <View style={{ flexDirection: 'row' }}>
            <Item regular style={Styles.itemHalf}>
              <Input
                placeholderTextColor="#B6B2B2"
                placeholder="Class"
                onChangeText={changeLevel}
                value={level}
                blurOnSubmit={false}
                onSubmitEditing={() => {
                  this.focusNextField('three');
                }}
                returnKeyType="next"
                ref={(input) => {
                  this.inputs['two'] = input;
                }}
              />
            </Item>
            <Item regular style={Styles.itemHalf}>
              <Input
                placeholderTextColor="#B6B2B2"
                placeholder="Fee"
                onChangeText={changeFee}
                value={fee}
                blurOnSubmit
                onSubmitEditing={console.log('Done - Pressed!')}
                returnKeyType="done"
                ref={(input) => {
                  this.inputs['three'] = input;
                }}
              />
            </Item>
          </View>
        </Form>
      </Content>
    );
  }
}
