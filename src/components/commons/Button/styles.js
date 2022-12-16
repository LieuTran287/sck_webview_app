import EStyleSheet from "react-native-extended-stylesheet";
import GlobalStore from "../../../themes/GlobalStore";

const styles = () => EStyleSheet.create({

  wrap:{
    paddingLeft: 15,
    paddingRight: 15,
    alignSelf:"flex-start",
  },

  general:{
    maxHeight:50, minHeight:50,
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: GlobalStore.color.primary,
  },

  text: {
    fontSize: 14,
    color: GlobalStore.color.buttonTitle,
    fontWeight: 'bold',
  },
  disabled: {
    backgroundColor: GlobalStore.color.buttonBgDisable,
  },

  round: {
    borderRadius: 45
  }
});

export default styles;
