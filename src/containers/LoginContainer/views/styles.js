import EStyleSheet from "react-native-extended-stylesheet";
import {Platform} from "react-native";
import GlobalStore from "../../../themes/GlobalStore";

const styles = () => EStyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: GlobalStore.color.primaryBg
  },
  text: {
    color: GlobalStore.color.text,
  },
  splash: {
    width: '100%',
    height: '100%'
  },
  logoWrapper: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 163
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom: 20,
    flex : 1,
  },
  slider: {
    overflow: 'visible' // for custom animations
  },
  listItemWrapper: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
  },
});
export default styles;
