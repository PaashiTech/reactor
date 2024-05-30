import {
  AccentText,
  BodyText,
  SVGWrapper,
  Separator,
  ShadowWrapper,
  View,
  XStack,
  YStack,
} from "@unmaze/views";
import { SvgProps, CheckGreen, ChevronDown } from "@unmaze/assets";
import React, { useState } from "react";
import { Checkbox } from "@unmaze/views/src/components/core/inputs/Checkbox";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { LayoutChangeEvent } from "react-native";
import { unmzBaseColors } from "@unmaze/config/src/unmaze-design-system/unmzDesignSystem";

type AccountListType = {
  id: number;
  accountNumber: string;
  accountType: string;
  verified: boolean;
}[];

type AccountSelectionCardProps = {
  bankLogo: React.FC<SvgProps>;
  bankTitle: string;
  accountList: AccountListType;
  selectedAccounts: string[];
  onAccountSelect: (accountNumber: string) => void;
};

export const AccountSelectionCard: React.FC<AccountSelectionCardProps> = ({
  bankLogo,
  bankTitle,
  accountList,
  selectedAccounts,
  onAccountSelect,
}) => {
  const [expanded, setExpanded] = useState<boolean>(
    accountList.some((item) => !item.verified)
  );
  const [height, setHeight] = useState(0);

  const isCollapsible = !accountList.some((item) => !item.verified);

  const onPress = () => {
    if (!isCollapsible) return;
    setExpanded(!expanded);
  };

  const animatedStyle = useAnimatedStyle(() => {
    const animatedHeight = withTiming(expanded ? height : 0, {
      duration: 300,
    });

    return {
      height: animatedHeight,
    };
  });

  const animatedStyleIcon = useAnimatedStyle(() => {
    const animatedRotate = withTiming(expanded ? "180deg" : "0deg", {
      duration: 300,
    });

    return {
      transform: [{ rotate: animatedRotate }],
    };
  });

  const onLayout = (e: LayoutChangeEvent) => {
    const layoutHeight = e.nativeEvent.layout.height;
    if (layoutHeight > 0 && layoutHeight !== height) {
      setHeight(layoutHeight);
    }
  };

  const numberOfSelectedAccounts = selectedAccounts.filter((item) =>
    accountList.map((item) => item.accountNumber).includes(item)
  ).length;

  const verifiedAccounts = accountList.filter((item) => item.verified).length;

  return (
    <View mt={"$6"}>
      <ShadowWrapper size="sm">
        <View
          borderRadius={"$4"}
          bg={isCollapsible ? "#DEFBE6" : "$icon/icon_error"}
          borderColor="#42BE65"
          borderWidth={isCollapsible ? 1 : 0}
        >
          <XStack p={16} gap={12} ai="center" onPress={onPress}>
            <SVGWrapper iconSVG={bankLogo} />
            <YStack
              flexGrow={1}
              flexDirection={isCollapsible ? "row" : "column"}
              alignItems={isCollapsible ? "center" : "flex-start"}
              justifyContent="space-between"
            >
              <AccentText>{bankTitle}</AccentText>
              {numberOfSelectedAccounts ? (
                <BodyText size="sm">
                  {numberOfSelectedAccounts}{" "}
                  {numberOfSelectedAccounts > 1 ? "accounts" : "account"}{" "}
                  selected
                </BodyText>
              ) : isCollapsible ? (
                <XStack alignItems="center" gap={8}>
                  <BodyText size="sm">
                    {verifiedAccounts} accounts verified
                  </BodyText>
                  <CheckGreen width={20} height={20} />
                  <Animated.View style={animatedStyleIcon}>
                    <SVGWrapper
                      iconSVG={ChevronDown}
                      size="md"
                      svgColor="#697077"
                    />
                  </Animated.View>
                </XStack>
              ) : (
                <BodyText size="sm">select account</BodyText>
              )}
            </YStack>
          </XStack>

          <Animated.View style={[animatedStyle, { overflow: "hidden" }]}>
            <View
              width={"100%"}
              onLayout={onLayout}
              style={{ position: "absolute" }}
            >
              <Separator borderColor={isCollapsible ? "#42BE65" : "#E7E7E7"} />
              <YStack paddingVertical={8}>
                {accountList.map((account) => {
                  return (
                    <XStack
                      key={account.id}
                      gap={3}
                      paddingHorizontal={16}
                      paddingVertical={8}
                      alignItems="center"
                      onPress={() => {
                        if (isCollapsible) return;
                        onAccountSelect(account.accountNumber);
                      }}
                    >
                      <XStack gap={4}>
                        <AccentText size="sm" color="#6F6F6F">
                          *{account.accountNumber.slice(-4)}
                        </AccentText>
                        <AccentText size="sm" color="#6F6F6F">
                          |
                        </AccentText>
                        <AccentText size="sm" color="#6F6F6F">
                          {account.accountType}
                        </AccentText>
                      </XStack>
                      <View ml="auto">
                        {account.verified ? (
                          <CheckGreen width={20} height={20} />
                        ) : (
                          <Checkbox
                            checked={selectedAccounts.includes(
                              account.accountNumber
                            )}
                          />
                        )}
                      </View>
                    </XStack>
                  );
                })}
              </YStack>
            </View>
          </Animated.View>
        </View>
      </ShadowWrapper>
    </View>
  );
};
