import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF9B00",
      }}
    >
      <Text
      style={{
        fontSize: 60,
      }}>Hello World</Text>
    </View>
  );
}
