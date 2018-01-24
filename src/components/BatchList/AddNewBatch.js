/**
 * Mobile Application :: Class Management System
 * Product Developed By: Nayeem Reza
 * Batch List || Author: Nayeem Reza
 * https://bitbucket.org/uraniumreza/classmanager
 */

import React, { Component } from 'react';
import { View, Modal, Text, ScrollView } from 'react-native';
import { Button, Content, Form, Item, Input } from 'native-base';
import Spinner from 'react-native-spinkit';

import Header from '../Header/Header';
import ListCard from './ListCard';
import { Styles as FormStyles } from '../Authentication/Styles';
import Styles from './Styles';
import BatchInfoForm from './BatchInfoForm';

export default class AddNewBatch extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      batchName: undefined,
      level: undefined,
      fee: undefined,
      schedule: ['1. Saturday - 2:00pm', '2. Monday - 3:30pm', '3. Wednesday - 3:00pm'],
    };

    this.focusNextField = this.focusNextField.bind(this);
    this.onChangeBatchName = this.onChangeBatchName.bind(this);
    this.onChangeLevel = this.onChangeLevel.bind(this);
    this.onChangeFee = this.onChangeFee.bind(this);

    this.inputs = {};
  }

  onChangeBatchName(value) {
    this.setState({ batchName: value });
  }

  onChangeLevel(value) {
    this.setState({ level: value });
  }

  onChangeFee(value) {
    this.setState({ fee: value });
  }

  focusNextField(id) {
    this.inputs[id].wrappedInstance.focus();
  }

  render() {
    const { visible, toggleModalVisibility } = this.props;
    const {
      batchName, level, fee, schedule,
    } = this.state;
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={toggleModalVisibility}
      >
        <View
          style={{
            position: 'relative',
            flex: 1,
            backgroundColor: '#F0F5F6',
          }}
        >
          <Header icons="0" headerText="New Batch" navigation={this.props.navigation} />
          <ScrollView style={Styles.cardStyleTop}>
            <BatchInfoForm
              batch={batchName}
              level={level}
              fee={fee}
              changeBatch={this.onChangeBatchName}
              changeLevel={this.onChangeLevel}
              changeFee={this.onChangeFee}
            />
            <View style={{ marginTop: 10 }} />
            <ListCard list={schedule} title="Class Schedule" />
            <View style={{ marginTop: 10 }} />
          </ScrollView>
        </View>
      </Modal>
    );
  }
}
