import React from "react";
import { useCashflowScreenContext } from "./context/CashflowScreenContextProvider";
import { CashflowCategoriesList } from "./CashflowCategoriesList";
import { CashflowTransactionsList } from "./CashflowTransactionsList";

type CashflowListProps = {};

export const CashflowList: React.FC<CashflowListProps> = ({}) => {
  const {
    state: { selectedListType },
  } = useCashflowScreenContext();

  return (
    <>
      {selectedListType === "Categories" ? (
        <CashflowCategoriesList />
      ) : (
        <CashflowTransactionsList />
      )}
    </>
  );
};
