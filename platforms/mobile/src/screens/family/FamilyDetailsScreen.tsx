import {
  ADD_FAMILY_MEMBER_SCREEN_ID,
  FAMILY_ACCOUNTS_SCREEN_ID,
  FamilyAccountsScreenProps,
} from "./types";
import {
  UnmzGradientButton,
  View,
  Text,
  useUserStore,
  FamilyMemberList,
  ScrollView,
  YStack,
  XStack,
  CustomSwitch,
  BottomModal,
  SecondaryButton,
} from "@unmaze/views";
import { Plus } from "@unmaze/assets";
import { FamilyEmpty } from "../../components/app/family";
import { UnmzNavScreen } from "../types";
import { FooterWithShadow } from "../../components/app/core/FooterWrapper";
import { useState } from "react";

type ModalCtxType = {
  type: "DeleteInvite" | "RemoveMember";
  phoneNumber: string;
  onConfirm: () => void;
  onCancel: () => void;
};

type BAMProps = {
  modalCtx: ModalCtxType;
  openModal: boolean;
  setOpenModal: (modalState: boolean) => void;
};

const _DeleteInviteRemoveMemberBAM: React.FC<BAMProps> = ({
  modalCtx,
  openModal,
  setOpenModal,
}) => {
  return (
    <BottomModal
      open={openModal}
      setOpen={setOpenModal}
      contentStyle={{
        paddingVertical: 24,
        paddingHorizontal: 20,
        gap: 20,
      }}
    >
      <View flex={1} gap={4}>
        <Text
          fontSize={16}
          fontWeight={"600"}
          letterSpacing={0.32}
          color={"#262626"}
        >
          {modalCtx.type === "DeleteInvite"
            ? "Delete Invite?"
            : "Remove Member?"}
        </Text>
        <Text fontSize={12} letterSpacing={0.24}>
          You won’t be able to access their investment details or benefit from
          family financial insights.
        </Text>
      </View>

      {/* Confirm / Cancel Buttons  */}
      <View flexDirection="row" gap={12}>
        <View flex={1}>
          <SecondaryButton onPress={modalCtx.onConfirm}>
            {modalCtx.type === "DeleteInvite" ? "Delete" : "Remove"}
          </SecondaryButton>
        </View>
        <View flex={1}>
          <UnmzGradientButton onPress={modalCtx!.onCancel}>
            Cancel
          </UnmzGradientButton>
        </View>
      </View>
    </BottomModal>
  );
};


const _FamilyDetailsScreen: React.FC<FamilyAccountsScreenProps> = ({
  navigation,
}) => {
  const family = useUserStore((state) => state.family);
  // const family = [];
  
  const [deleteInviteBAM, setDeleteInviteBAM] = useState(false);
  const [modalCtx, setModalCtx] = useState<ModalCtxType>({
    type: "RemoveMember",
    phoneNumber: "",
    onCancel: () => {},
    onConfirm: () => {},
  });

  return (
    <View flex={1} jc="space-between">
      {family.length > 0 ? (
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <YStack rowGap={16} paddingHorizontal={20} paddingVertical={24}>
            <Text
              color="#262626"
              fontSize={16}
              fontStyle="normal"
              fontWeight="600"
              lineHeight={20}
              letterSpacing={0.32}
            >
              Family Members
            </Text>
            <FamilyMemberList
              members={family.map((fm) => ({
                ...fm,
                onOptions: () => {
                  // alert("Delete " + fm.name.first + "'s invite!");
                  setModalCtx({
                    type:
                      fm.invitation.status === "Done"
                        ? "RemoveMember"
                        : "DeleteInvite",
                    phoneNumber: fm.phone,
                    onConfirm: () => {
                      fm.invitation.status === "Done"
                        ? alert("Call remove member API here")
                        : alert("Call delete invite API here");
                    },
                    onCancel: () => {
                      setDeleteInviteBAM(false);
                    },
                  });
                  setDeleteInviteBAM(true);
                },
                onRemind: () => {
                  alert("Remind " + fm.name.first + "!");
                },
              }))}
            />
            <XStack
              justifyContent="space-between"
              paddingHorizontal={4}
              paddingVertical={8}
            >
              <Text
                color="#161616"
                fontSize={14}
                fontStyle="normal"
                fontWeight="500"
                lineHeight={18}
                letterSpacing={0.28}
              >
                Share my investment details with the family members
              </Text>
              <CustomSwitch />
            </XStack>
          </YStack>
        </ScrollView>
      ) : (
        <FamilyEmpty />
      )}
      {family.length > 0 ? (
        <FooterWithShadow>
          <UnmzGradientButton
            icon={Plus}
            onPress={() => navigation.navigate(ADD_FAMILY_MEMBER_SCREEN_ID)}
          >
            Add family
          </UnmzGradientButton>
        </FooterWithShadow>
      ) : (
        <View p={20} paddingTop={16}>
          <UnmzGradientButton
            icon={Plus}
            onPress={() => navigation.navigate(ADD_FAMILY_MEMBER_SCREEN_ID)}
          >
            Add family
          </UnmzGradientButton>
        </View>
      )}
      <_DeleteInviteRemoveMemberBAM
        modalCtx={modalCtx}
        openModal={deleteInviteBAM}
        setOpenModal={setDeleteInviteBAM}
      />
    </View>
  );
};

export const FamilyDetailsScreen: UnmzNavScreen = {
  key: FAMILY_ACCOUNTS_SCREEN_ID,
  title: "Family Accounts",
  content: _FamilyDetailsScreen,
};
