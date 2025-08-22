import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/loginScreen';
import Counter from '../screens/counterScreen';
import { Posts } from '../screens/post';
import { PostDetails } from '../screens/postDetails';

const Stack = createStackNavigator();
// export type RootStackParamList = {
//   Dashboard: undefined;
//   FlightDetailsScreen: { id: string };
//   FlightListScreen:undefined;
//   BookNowScreen:undefined
// };
export const HomeStack = () => {

    return (
        <Stack.Navigator screenOptions={{ animationEnabled: false, headerShown: false }}>
           <Stack.Screen name="Home" component={Login} />
            <Stack.Screen name="Posts" component={Posts} />
            <Stack.Screen name="PostDetails" component={PostDetails} />
            <Stack.Screen name="Counter" component={Counter} />        
        </Stack.Navigator>
    );
}

