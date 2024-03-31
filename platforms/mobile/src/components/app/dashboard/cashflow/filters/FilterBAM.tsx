import {
  BottomModal,
  HeadingText,
  IconButton,
  ShadowWrapper,
  UnmzGradientButton,
  View,
  XStack,
} from "@unmaze/views";
import { Close } from "@unmaze/assets";
import { FilterTabs } from "./FilterTabs";
import { CashflowContextProvider } from "../context/CashflowContextProvider";

type FilterBAMProps = {
  modalVisible: boolean;
  toggle: (isOpen: boolean) => void;
  close: () => void;
};

export const FilterBAM: React.FC<FilterBAMProps> = ({
  modalVisible,
  toggle,
  close,
}) => {
  return (
    <BottomModal
      open={modalVisible}
      setOpen={toggle}
      contentStyle={{ borderRadius: 20 }}
    >
      {/**
       * ----------------------------
       * Modal Headear with Close CTA
       * ----------------------------
       * */}
      <XStack
        p={16}
        justifyContent="space-between"
        borderBottomWidth={1}
        borderColor="#DDE1E6"
      >
        <HeadingText size="md">Filters</HeadingText>
        <IconButton icon={Close} onPress={close} />
      </XStack>

      {/**
       * ---------------------------------
       * Tabs to select the type of filter
       * ---------------------------------
       * */}
      <CashflowContextProvider>
        <FilterTabs />
      </CashflowContextProvider>

      {/**
       * ---------------------------------
       * CTA to apply the selected filters
       * ---------------------------------
       * */}
      <ShadowWrapper size="sm">
        <View bg="#fff" p={16}>
          <UnmzGradientButton>Apply</UnmzGradientButton>
        </View>
      </ShadowWrapper>
    </BottomModal>
  );
};
