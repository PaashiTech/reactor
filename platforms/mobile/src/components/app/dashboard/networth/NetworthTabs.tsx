import React, { useState } from "react";
import {
  AccentText,
  AnimatePresence,
  StackProps,
  TabLayout,
  Tabs,
  View,
  YStack,
} from "@unmaze/views";
import { TabsTabProps } from "@unmaze/views";
import { TabOptions, TabType } from "./types";

interface NetworthTabsProps {
  tabs: TabType[];
  selectedTab: TabOptions;
  setSelectedTab: React.Dispatch<TabOptions>;
}

export const NetworthTabs: React.FC<NetworthTabsProps> = ({
  tabs,
  selectedTab,
  setSelectedTab,
}) => {
  const [tabState, setTabState] = useState<{
    currentTab: TabOptions;
    activeAt: TabLayout | null;
  }>({
    currentTab: selectedTab,
    activeAt: null,
  });

  const setCurrentTab = (currentTab: TabOptions) =>
    setTabState({ ...tabState, currentTab });
  const setActiveIndicator = (activeAt) =>
    setTabState({ ...tabState, activeAt });
  const { activeAt, currentTab } = tabState;

  const handleOnInteraction: TabsTabProps["onInteraction"] = (type, layout) => {
    if (type === "select") {
      setActiveIndicator(layout);
    }
  };

  return (
    <View p={8}>
      <Tabs
        value={currentTab}
        onValueChange={setCurrentTab}
        orientation="horizontal"
        flexDirection="column"
        activationMode="manual"
        backgroundColor="#FFF"
        position="relative"
      >
        <YStack>
          <AnimatePresence>
            {activeAt && (
              <TabsRovingIndicator
                borderRadius={8}
                width={activeAt.width}
                height={activeAt.height}
                x={activeAt.x}
                y={activeAt.y}
              />
            )}
          </AnimatePresence>

          <Tabs.List
            disablePassBorderRadius
            loop={false}
            backgroundColor="transparent"
            gap={8}
          >
            {tabs.map((tab) => (
              <Tabs.Tab
                unstyled
                key={tab.id}
                value={tab.title}
                disabled={tab.disabled}
                onInteraction={handleOnInteraction}
                flexGrow={1}
                onPress={() => setSelectedTab(tab.title)}
                backgroundColor={tab.disabled ? "#F4F4F4" : "transparent"}
                borderRadius={8}
                paddingVertical={8}
              >
                <View flex={1} ai="center">
                  <AccentText
                    size="md"
                    animation="100ms"
                    color={
                      tab.disabled
                        ? "#CAC5C4"
                        : currentTab === tab.title
                        ? "#FFF"
                        : "#262626"
                    }
                  >
                    {tab.title}
                  </AccentText>
                </View>
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </YStack>
      </Tabs>
    </View>
  );
};

const TabsRovingIndicator = ({
  active,
  ...props
}: { active?: boolean } & StackProps) => {
  return (
    <YStack
      position="absolute"
      backgroundColor="#262626"
      opacity={1}
      animation="100ms"
      enterStyle={{
        opacity: 0,
      }}
      exitStyle={{
        opacity: 0,
      }}
      {...props}
    />
  );
};
