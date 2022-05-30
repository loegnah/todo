import { SafeAreaView } from "react-native";
import tw from "twrnc";
import Banner from "../component/banner";
import NavigationBar from "../component/navigationBar";
import MainContentLayout from "./mainContentLayout";

const MainLayout = ({ children }) => {
  return (
    <SafeAreaView style={tw`h-full`}>
      <MainContentLayout>{children}</MainContentLayout>
    </SafeAreaView>
  );
};

export default MainLayout;
