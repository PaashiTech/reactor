import { ScrollView, View } from "@unmaze/views";
import { DashboardHeader } from "../../components/app/dashboard/DashboardHeader";
import { StatusBar } from "react-native";
import { Networth } from "./Networth";
import { Cashflow } from "./Cashflow";
import { useState } from "react";
import { FilterBAM } from "../../components/app/dashboard/cashflow/FilterBAM";
import { CashflowContextProvider } from "../../components/app/dashboard/cashflow/context/CashflowContextProvider";

export const DashboardScreen: React.FC = () => {
  const [showFiltersModal, setShowFiltersModal] = useState<boolean>(false);

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
      <View flex={1}>
        <ScrollView
          flex={1}
          contentContainerStyle={{
            padding: 20,
            paddingTop: 24,
            backgroundColor: "#FAF9F2",
          }}
          showsVerticalScrollIndicator={false}
        >
          <DashboardHeader />
          <Networth />
          <CashflowContextProvider>
            <Cashflow openFilters={() => setShowFiltersModal(true)} />
          </CashflowContextProvider>
        </ScrollView>
        <CashflowContextProvider>
          <FilterBAM
            modalVisible={showFiltersModal}
            toggle={setShowFiltersModal}
            close={() => setShowFiltersModal(false)}
          />
        </CashflowContextProvider>
      </View>
    </>
  );
};
