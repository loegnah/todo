import { View, Text, Button } from "react-native";
import tw from "twrnc";
import MainLayout from "../layout/mainLayout";

const TestPage = ({ navigation }) => {
  return (
    <MainLayout>
      <View style={tw`bg-neutral-200`}>
        <Text>Test</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push("Home")}
        />
      </View>
    </MainLayout>
  );
};

export default TestPage;
