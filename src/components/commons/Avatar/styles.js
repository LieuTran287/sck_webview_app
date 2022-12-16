import EStyleSheet from "react-native-extended-stylesheet";
import GlobalStore from "../../../themes/GlobalStore";

const styles = () => EStyleSheet.create({
  container: {
    width : 45,
    height: 45,
    borderRadius:45,
    borderWidth:0.5,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: GlobalStore.color.avatarBg,

  },

  text:{
    color : GlobalStore.color.primary
  },
  circle:{
    width : 45,
    height: 45,
    borderRadius:45,
    borderWidth:0.5,
  }

});

export default styles;
