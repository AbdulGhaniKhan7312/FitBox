import { View, Text, LogBox } from 'react-native'
import AppNavigation from "../navigation/appNavigation"
import {FitnessContext} from "../Context";

export default function App() {
  LogBox.ignoreLogs(["ViewPropTypes"])
  LogBox.ignoreLogs(["Possible Unhandled Promise"])
  LogBox.ignoreLogs(["@firebase"])
  return (
    <FitnessContext>
      <AppNavigation />
    </FitnessContext>
    
  );
}