import { Text, View } from "@unmaze/views";
import { DashboardHeader } from "../../components/app/dashboard/DashboardHeader";
import { StatusBar } from "react-native";
import { Networth } from "./Networth";

export const DashboardScreen: React.FC = () => {
  return (
    <>
      {/**
       * Remove Status bar and the wrapper react fragment
       * once the screen is used with a navigator.
       *
       * Also remove the bg="FAF9F2" from the main <View> wrapper as
       * it will be taken care by the navigatior.
       */}
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <View flex={1} p={20} pt={24} bg="#FAF9F2">
        <DashboardHeader />
        <Networth />
      </View>
    </>
  );
};
