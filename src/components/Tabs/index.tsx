import { StyledTabs } from "./styles";

export interface TabOptions {
  label: string;
  onClick: () => void;
  isActive: boolean;
}
export interface TabsProps {
  tabs: TabOptions[];
}

function TabsComponent(props: TabsProps) {
  return (
    <>
      <StyledTabs>
        {props.tabs.map((tab: TabOptions, index: number) => (
          <div
            key={index}
            onClick={tab.onClick}
            className={`${tab.isActive ? "active tab" : "tab"}`}
            role="button"
          >
            {tab.label}
          </div>
        ))}
      </StyledTabs>
    </>
  );
}

export default TabsComponent;
