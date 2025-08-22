import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/loginScreen';
import Counter from '../screens/counterScreen';




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
              <Stack.Screen name="Counter" component={Counter} />
             <Stack.Screen name="Home" component={Login} />
      
    </Stack.Navigator>
  );
}

