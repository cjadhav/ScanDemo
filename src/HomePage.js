import React, {useState} from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Button from './Button';

function HomePage({navigation}) {
  const [result, setResult] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txtTitle}>Scanner Demo</Text>
      <View style={styles.btnBar}>
        <Button
          title="Scan Barcode"
          onPress={() =>
            navigation.navigate('scanner', {
              type: 'barcode',
              shareResult: setResult,
            })
          }
        />
        <Button
          title="Scan Text"
          onPress={() =>
            navigation.navigate('scanner', {
              type: 'text',
              shareResult: setResult,
            })
          }
        />
      </View>
      {result && (
        <>
          <Text style={styles.txtSubTitle}>Result:(JSON)</Text>
          <ScrollView
            style={styles.resultScroll}
            contentContainerStyle={styles.resultScrollContainer}>
            <Text style={styles.txtResult}>{JSON.stringify(result)}</Text>
          </ScrollView>
        </>
      )}
      {result && result.textBlocks && result.textBlocks.length > 0 && (
        <>
          <Text style={[styles.txtSubTitle, {fontSize: 18}]}>
            Result:(Formatted only value from JSON)
          </Text>
          <ScrollView
            style={styles.resultScroll}
            contentContainerStyle={styles.resultScrollContainer}>
            <Text style={styles.txtResult}>
              {result.textBlocks.map(o => o.value)}
            </Text>
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'aqua',
  },
  txtTitle: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
  },
  btnBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  txtSubTitle: {
    width: '95%',
    color: '#000',
    fontSize: 20,
  },
  resultScroll: {
    marginBottom: 10,
    width: '95%',
    height: '50%',
  },
  resultScrollContainer: {
    paddingHorizontal: 5,
    backgroundColor: '#fff',
  },
  txtResult: {
    color: '#000',
    fontSize: 16,
  },
});
