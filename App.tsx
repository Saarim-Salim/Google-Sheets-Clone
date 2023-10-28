import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Header, Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import download from './utils/download';

interface State {
  spreadsheetData: string[][];
}

class GoogleSheetsDesign extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      // Simulated spreadsheet data
      spreadsheetData: Array.from({ length: 10 }, () => Array(5).fill('')),
    };
  }

  componentDidMount(){
    // Load data from AsyncStorage when the component mounts
    AsyncStorage.getItem('spreadsheetData')
      .then((data) => {
        if (data) {
          const parsedData = JSON.parse(data);
          this.setState({ spreadsheetData: parsedData });
        }
      })
      .catch((error) => {
        console.log('Error retrieving data from AsyncStorage:', error);
      });
  }

  handleCellChange = (rowIndex: number, columnIndex: number, text: string) => {
    const updatedData = [...this.state.spreadsheetData];
    updatedData[rowIndex][columnIndex] = text;
    this.setState({ spreadsheetData: updatedData });
    this.saveDataToAsyncStorage(updatedData);
  };
  saveDataToAsyncStorage = async (data: string[][]) => {
    try {
      await AsyncStorage.setItem('spreadsheetData', JSON.stringify(data));
    } catch (error) {
      console.log('Error saving data to AsyncStorage:', error);
    }
  };

  renderHeaderRow() {
    return (
      <View style={styles.row}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Text key={index} style={styles.headerCell}>
            {String.fromCharCode(65 + index)}
          </Text>
        ))}
      </View>
    );
  }

  renderRows() {
    return this.state.spreadsheetData.map((row, rowIndex) => (
      <View key={rowIndex} style={styles.row}>
        {row.map((cell, cellIndex) => (
          <TextInput
            key={cellIndex}
            style={styles.cell}
            value={cell}
            onChangeText={(text) => this.handleCellChange(rowIndex, cellIndex, text)}
          />
        ))}
      </View>
    ));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          centerComponent={{ text: 'Google Sheets', style: { color: '#fff', fontSize: 18 } }}
          rightComponent={
            <TouchableOpacity onPress={download}>
              <Icon name="cloud-download" type="font-awesome" color="#fff" size={24} />
            </TouchableOpacity>
          }
          containerStyle={{
            backgroundColor: 'blue',
            justifyContent: 'space-around',
          }}
        />
        <ScrollView>
          <View style={styles.spreadsheet}>
            {this.renderHeaderRow()}
            {this.renderRows()}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  spreadsheet: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  headerCell: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    borderColor: '#ccc',
    borderWidth: 1,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});

export default GoogleSheetsDesign;
