import { View } from "react-native";
import tw from "twrnc";

const MainContentLayout = ({ children }) => {
  return <View style={tw`grow bg-red-200`}>{children}</View>;
};

export default MainContentLayout;
