import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";
export default function App() {
  return (
    <>
      <StatusBar
        // barStyle='dark-content'
        barStyle="light-content"
        backgroundColor="tranparent"
        translucent={false}
      />
      <Home />
    </>
  );
}
