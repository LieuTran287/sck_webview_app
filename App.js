/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {WebView} from 'react-native-webview';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  function onMessage(data) {
    console.log(data);
    alert(data.nativeEvent.data);
  }

  function sendDataToWebView() {
    webviewRef.current.postMessage('message');
  }
  const uriDefault = 'https://sck-web.poolata.com/'
  const [uri, setUri] = useState(uriDefault)
  const webviewRef = useRef();

  return (
    <>
    
    {
      !uri.includes(uriDefault) &&
      <View style={[{backgroundColor: '#1D1D42',  flexDirection: "row", alignItems: 'center'}]}>
        <View >
          <TouchableOpacity
            style={[{ width: 60, height: 60, justifyContent: 'center', alignItems: 'center'}]}
            onPress={() => setUri(`${uriDefault}customer-service`)}
          >
           <Image
            style={[{ width: 30, height: 30}]}
            source={
              {
                uri: 'https://img.icons8.com/dusk/2x/back.png'
              }
            }
          />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={[{color: '#fff',}]}>Dịch vụ khách hàng</Text>
        </View>
      </View>
      
    }
     <WebView
        source={{uri: uri}}
        ref={webviewRef}
        onNavigationStateChange={({url}) => {
          setUri(url)
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
