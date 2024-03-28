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

export type TabOptions = "Net" | "Assets" | "Liabilities";

interface NetworthTabsProps {
  setSelectedTab: React.Dispatch<TabOptions>;
}

export const NetworthTabs: React.FC<NetworthTabsProps> = ({
  setSelectedTab,
}) => {
  const tabs = [
    {
      id: 1,
      title: "Net",
    },
    {
      id: 2,
      title: "Assets",
    },
    {
      id: 3,
      title: "Liabilities",
    },
  ] as const;

  const [tabState, setTabState] = useState<{
    currentTab: TabOptions;
    activeAt: TabLayout | null;
  }>({
    currentTab: "Net",
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
          >
            {tabs.map((tab) => (
              <Tabs.Tab
                unstyled
                key={tab.id}
                value={tab.title}
                onInteraction={handleOnInteraction}
                flexGrow={1}
                flexBasis={`${tabs.length / 3}%`}
                onPress={() => setSelectedTab(tab.title)}
                backgroundColor="transparent"
                paddingHorizontal={24}
                paddingVertical={8}
              >
                <AccentText
                  size="md"
                  animation="100ms"
                  color={currentTab === tab.title ? "#FFF" : "#262626"}
                >
                  {tab.title}
                </AccentText>
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
