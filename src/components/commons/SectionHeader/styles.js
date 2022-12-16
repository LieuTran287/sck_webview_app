import EStyleSheet from "react-native-extended-stylesheet";
import GlobalStore from "../../../themes/GlobalStore";

const styles = () => EStyleSheet.create({
  container: {
    width: "100%",
    height: 45,
    justifyContent:"center",
    paddingLeft: 10,
    paddingRight:10,
  },

  text:{
    color : GlobalStore.color.primary
  },
});

export default styles;
