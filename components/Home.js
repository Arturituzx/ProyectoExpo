import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Dimensions, Switch } from 'react-native';
const {width, height} = Dimensions.get('window');
import { useColorScheme } from 'nativewind';
import ProductsList from './ProductsLists';

export default function Home() {
  const { colorScheme, toggleColorScheme} = useColorScheme();
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-200 dark:bg-black">
      <View className="flex-row w-full gap-5">
        <Text className="text-2xl font-bold dark:text-white">New colletion</Text>
        <Switch value={ colorScheme === "dark"} onChange={toggleColorScheme} />
      </View>
      <ProductsList />
    </SafeAreaView>
  );
}