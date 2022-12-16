import EStyleSheet from "react-native-extended-stylesheet";
import GlobalStore from "../../../themes/GlobalStore";

const styles = () => EStyleSheet.create({
  container: {
    width : "100%",
    flexDirection:"row",
    maxHeight: 50,
  },
  active:{
    backgroundColor:GlobalStore.color.primary,
  },
  deactive:{
    backgroundColor:GlobalStore.color.buttonBgDisable,
  },
  text: {
    fontSize: 14,
    color: GlobalStore.color.buttonTitle,
    fontWeight: 'bold',
  },

  buttonWrapper:{
    flex: 1, alignItems: "center", justifyContent: "center"
  }
});

export default styles;
