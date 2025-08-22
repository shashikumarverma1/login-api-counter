import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/loginScreen';




const Stack = createStackNavigator();
// export type RootStackParamList = {
//   Dashboard: undefined;
//   FlightDetailsScreen: { id: string };
//   FlightListScreen:undefined;
//   BookNowScreen:undefined
// };
export const HomeStack =()=>{


  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false, headerShown: false }}>
             <Stack.Screen name="Home" component={Login} />
    </Stack.Navigator>
  );
}

