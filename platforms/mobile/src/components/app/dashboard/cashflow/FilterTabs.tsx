import { AccentText, Tabs } from "@unmaze/views";
import { useState } from "react";
import { DurationTabContent } from "./DurationTabContent";
import { AccountTabContent } from "./AccountTabContent";

export const FilterTabs = () => {
  const [activeTab, setActiveTab] = useState<"account" | "duration">("account");
  return (
    <Tabs defaultValue="account" flexDirection="row" orientation="vertical">
      <Tabs.List
        disablePassBorderRadius="end"
        borderRightWidth={1}
        borderColor="#E7E7E7"
        borderRadius={0}
        height={230}
        backgroundColor="#F4F4F4"
      >
        <Tabs.Tab
          unstyled
          value="account"
          height="auto"
          p={16}
          backgroundColor={activeTab === "account" ? "#FFF" : "transparent"}
          onPress={() => setActiveTab("account")}
        >
          <AccentText size="sm">Account</AccentText>
        </Tabs.Tab>
        <Tabs.Tab
          unstyled
          value="duration"
          height="auto"
          p={16}
          backgroundColor={activeTab === "duration" ? "#FFF" : "transparent"}
          onPress={() => setActiveTab("duration")}
        >
          <AccentText size="sm">Duration</AccentText>
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Content flex={1} value="account" paddingHorizontal={16}>
        <AccountTabContent />
      </Tabs.Content>
      <Tabs.Content flex={1} value="duration" paddingHorizontal={16}>
        <DurationTabContent />
      </Tabs.Content>
    </Tabs>
  );
};
