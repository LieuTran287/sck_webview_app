import React, {useRef, useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import WebView from "react-native-webview";
function App(): JSX.Element {
  const uriDefault = 'https://mcredit.vaytien-nhanh247.com/'
  const [uri, setUri] = useState(uriDefault)
  const webviewRef = useRef<WebView>();

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
}

export default App;
