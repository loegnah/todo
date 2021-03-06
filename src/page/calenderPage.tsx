import { View, Text, Button } from "react-native";
import tw from "twrnc";
import MainLayout from "../layout/mainLayout";

const CalenderPage = ({ navigation }) => {
  return (
    <MainLayout>
      <Text>Calendaaar</Text>
      <View style={tw`bg-neutral-500`}>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push("Test")}
        />
      </View>
    </MainLayout>
  );
};

export default CalenderPage;
