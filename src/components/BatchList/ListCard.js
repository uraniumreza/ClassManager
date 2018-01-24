/**
 * Mobile Application :: Class Management System
 * Project Developed By: Nayeem Reza
 * https://bitbucket.org/uraniumreza/classmanager
 */

import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import IconIon from 'react-native-vector-icons/Ionicons';
import { Input, Item } from 'native-base';

import Styles from './Styles';
import RenderList from './RenderList';

const { width } = Dimensions.get('window');

export default class ListCard extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
      List: this.props.list,
      newInputItem: '',
    };
  }

  addItem() {
    const a = Array.from(this.state.List);
    a.push(this.state.newInputItem);

    this.setState({
      List: a,
      newInputItem: undefined,
    });
  }

  removeItem(index) {
    const a = Array.from(this.state.List);
    a.splice(index, 1);

    this.setState({
      List: a,
      newInputItem: '',
    });
  }

  render() {
    return (
      <View style={Styles.cardListStyle}>
        <View style={Styles.cardHeader}>
          <Text style={[Styles.cardHeaderText, { marginLeft: 15, fontSize: 20 }]}>
            {this.props.title}
          </Text>

          {this.state.showForm && (
            <TouchableOpacity
              style={{
                marginRight: 10,
              }}
              onPress={() => console.log('SAVE Button Pressed')}
            >
              <IconIon name="md-checkmark-circle" size={25} color="#0fc9ff" align="right" />
            </TouchableOpacity>
          )}
          {!this.state.showForm && (
            <TouchableOpacity
              style={{
                marginRight: 10,
              }}
              onPress={() => this.setState({ showForm: true })}
            >
              <Icon name="pencil" size={22} color="#0fc9ff" align="right" />
            </TouchableOpacity>
          )}
        </View>
        <View style={Styles.cardHeaderBottomBorder} />

        {this.state.showForm && (
          <View
            style={[
              Styles.durationView,
              {
                alignItems: 'center',
                marginLeft: 15,
                justifyContent: 'center',
              },
            ]}
          >
            {/* add list item input */}
            <Item
              style={{
                width: width - 60,
                // height: 30,
                borderBottomWidth: 1,
                borderBottomColor: 'rgba(15, 201, 255, 0.5)',
              }}
            >
              <Input
                // underlineColorAndroid="rgba(15, 201, 255, 0.5)"
                placeholder="Add new item here"
                value={this.state.newInputItem}
                placeholderTextColor="#999999"
                onChangeText={newInputItem => this.setState({ newInputItem })}
                onSubmitEditing={this.addItem.bind(this)}
              />
            </Item>
          </View>
        )}
        <RenderList
          List={this.state.List}
          editMode={this.state.showForm}
          noText="No schedule added!"
          removeItem={this.removeItem.bind(this)}
          // saveList={this.saveList.bind(this)}
        />
      </View>
    );
  }
}
