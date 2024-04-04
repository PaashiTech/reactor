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
import { useCashflowContext } from "../context/CashflowContextProvider";

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
  const { state, dispatch } = useCashflowContext();
  return (
    <BottomModal
      open={modalVisible}
      setOpen={(isOpen) => {
        if (!isOpen) {
          dispatch({ type: "DISMISS_FILTERS" });
        }
        toggle(isOpen);
      }}
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
        <IconButton
          icon={Close}
          onPress={() => {
            dispatch({ type: "DISMISS_FILTERS" });
            close();
          }}
        />
      </XStack>

      {/**
       * ---------------------------------
       * Tabs to select the type of filter
       * ---------------------------------
       * */}
      <FilterTabs state={state} dispatch={dispatch} />
      {/**
       * ---------------------------------
       * CTA to apply the selected filters
       * ---------------------------------
       * */}
      <ShadowWrapper size="sm">
        <View bg="#fff" p={16}>
          <UnmzGradientButton
            onPress={() => {
              dispatch({ type: "APPLY_FILTERS" });
              close();
            }}
          >
            Apply
          </UnmzGradientButton>
        </View>
      </ShadowWrapper>
    </BottomModal>
  );
};
