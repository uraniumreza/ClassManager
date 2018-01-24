import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import IconIon from 'react-native-vector-icons/Ionicons';

import Styles from './Styles';

const { width } = Dimensions.get('window');

class RenderList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  removeItem(index) {
    console.log(index);
    this.props.removeItem(index);
  }

  renderRow() {
    const collection = [];
    if (this.props.List && this.props.List.length > 0) {
      const size = this.props.List.length;
      this.props.List.map((obj, index) => {
        collection[index] = (
          <View key={index} style={Styles.listItemColumn}>
            <View style={Styles.listItem}>
              {this.props.editMode && (
                <IconIon
                  name="ios-close-circle-outline"
                  size={22}
                  color="red"
                  align="right"
                  onPress={this.removeItem.bind(this, index)}
                  style={{ marginLeft: 12 }}
                />
              )}
              <Text style={[Styles.listItemText, { marginLeft: 7, fontSize: 15 }]}>{obj}</Text>
            </View>

            {size - 1 !== index && (
              <View
                style={{
                  marginTop: 10,
                  marginLeft: 13,
                  marginRight: 13,
                  width: width - 66,
                  height: 0.8,
                  backgroundColor: '#E8E7E7',
                  opacity: 0.6,
                }}
              />
            )}
            {size - 1 === index && <View style={{ marginBottom: 12 }} />}
          </View>
        );
      });
    } else if (this.props.editMode) {
      collection[0] = <View style={Styles.listItemColumn} />;
    } else {
      collection[0] = (
        <View style={Styles.listItemColumn}>
          <View style={Styles.listItem}>
            <Text style={[Styles.listItemText, { marginLeft: 15, fontSize: 15, opacity: 0.3 }]}>
              {this.props.noText}
            </Text>
          </View>
          <View style={{ marginBottom: 12 }} />
        </View>
      );
    }

    return collection;
  }

  render() {
    return <View>{this.renderRow()}</View>;
  }
}

export default RenderList;
