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
import {
  NetworthTabs,
  TabOptions,
} from "../../components/app/dashboard/networth/NetworthTabs";
import { NetworthHeader } from "../../components/app/dashboard/networth/NetworthHeader";
import { NetworthLineChart } from "../../components/app/dashboard/networth/NetworthLineChart";

type CTATextMapType = Record<TabOptions, string>;

const CTATextMAP: CTATextMapType = {
  Net: "View Balance Sheet",
  Assets: "View Assets",
  Liabilities: "View Liabilities",
};

export const Networth = () => {
  const [selectedTab, setSelectedTab] = useState<TabOptions>("Net");

  const CTAText = CTATextMAP[selectedTab];

  return (
    <>
      <NetworthHeader />
      <View mt={16}>
        <ShadowWrapper size="sm">
          <View bg={"#FFF"} borderRadius={12} overflow="hidden">
            <NetworthTabs setSelectedTab={setSelectedTab} />
            <Separator borderColor={"#E7E7E7"} />
            <NetworthLineChart selectedTab={selectedTab} />
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
