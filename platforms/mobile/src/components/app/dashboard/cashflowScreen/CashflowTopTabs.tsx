import { AnimatedTabType, AnimatedTopTabs } from "./AnimatedTopTabs";
import { useCashflowScreenContext } from "./context/CashflowScreenContextProvider";

type Props = {};

const tabs: AnimatedTabType[] = [
  {
    id: 1,
    title: "Spends",
  },
  {
    id: 2,
    title: "Investments",
  },
  {
    id: 3,
    title: "Incoming",
  },
];

const CashflowTopTabs = (props: Props) => {
  const {
    state: { activeTabIndex },
    dispatch,
  } = useCashflowScreenContext();

  const handleSelectTab = (index: number) => {
    dispatch({ type: "SET_ACTIVE_TAB", payload: { activeTabIndex: index } });
  };
  return (
    <AnimatedTopTabs
      tabs={tabs}
      activeTabIndex={activeTabIndex}
      onTabSelect={handleSelectTab}
    />
  );
};

export default CashflowTopTabs;
