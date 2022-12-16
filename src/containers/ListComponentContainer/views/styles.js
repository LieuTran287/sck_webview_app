import EStyleSheet from "react-native-extended-stylesheet";
import {Platform} from "react-native";
import GlobalStore from "../../../themes/GlobalStore";

const styles = () => EStyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: GlobalStore.color.primaryBg
  },
});
export default styles;
