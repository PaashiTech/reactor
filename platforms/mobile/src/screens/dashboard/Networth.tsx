import {
  HeadingText,
  SVGWrapper,
  Separator,
  ShadowWrapper,
  View,
  XStack,
} from "@unmaze/views";
import { ChevronRight } from "@unmaze/assets";
import { useState } from "react";
import { Pressable } from "react-native";
import { NetworthTabs } from "../../components/app/dashboard/networth/NetworthTabs";
import { NetworthHeader } from "../../components/app/dashboard/networth/NetworthHeader";
import { NetworthLineChart } from "../../components/app/dashboard/networth/NetworthLineChart";
import { data } from "../../components/app/dashboard/networth/data";
import { TabOptions } from "../../components/app/dashboard/networth/types";
import {
  CTATextMAP,
  tabs,
} from "../../components/app/dashboard/networth/constants";
import {
  getActiveTab,
  getFilteredTabs,
} from "../../components/app/dashboard/networth/helpers";

export const Networth = () => {
  const [selectedTab, setSelectedTab] = useState<TabOptions>(
    getActiveTab(getFilteredTabs(data, tabs))
  );

  const CTAText = CTATextMAP[selectedTab];

  return (
    <>
      <NetworthHeader />
      <View mt={16}>
        <ShadowWrapper size="sm">
          <View bg={"#FFF"} borderRadius={12} overflow="hidden">
            <NetworthTabs
              tabs={getFilteredTabs(data, tabs)}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
            <Separator borderColor={"#E7E7E7"} />
            <NetworthLineChart data={data} selectedTab={selectedTab} />
            <Separator borderColor={"#E7E7E7"} />
            <View paddingVertical={12} jc="center" ai="center">
              <Pressable
                onPress={() => {
                  alert(CTAText);
                }}
              >
                <XStack gap={4} ai="center">
                  <HeadingText>{CTAText}</HeadingText>
                  <SVGWrapper iconSVG={ChevronRight} size="sm" />
                </XStack>
              </Pressable>
            </View>
          </View>
        </ShadowWrapper>
      </View>
    </>
  );
};
