import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {RNCamera} from 'react-native-camera';

function Scanner({route, navigation}) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const {type, shareResult} = route.params;

  const didBarcodeScan = ({barcodes}) => {
    if (barcodes.length > 0 && type === 'barcode') {
      shareResult(barcodes);
      navigation.goBack();
    }
  };

  const didTextScan = e => {
    console.log(e);
    if (e.textBlocks.length > 0 && type === 'text') {
      shareResult(e);
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {console.log(type)}
      <View>
        <RNCamera
          // ref={refCamera}
          style={{
            height: windowHeight * 0.8,
            width: windowWidth * 0.9,
          }}
          type="back"
          autoFocus="on"
          ratio="16:9"
          // ratio="4:3"
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onGoogleVisionBarcodesDetected={
            type === 'barcode' ? didBarcodeScan : null
          }
          onTextRecognized={type === 'text' ? didTextScan : null}
          // onTextRecognized={({textBlocks}) => {
          //   if (textBlocks.length > 0) console.log(textBlocks);
          // }}
        />
      </View>
    </SafeAreaView>
  );
}

export default Scanner;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'aqua',
    paddingVertical: 20,
  },
});
