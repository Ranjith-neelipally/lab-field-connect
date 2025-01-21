import { useState } from "react";
import { TabOptions } from "../../components/Tabs";
import TabsComponent from "../../components/Tabs";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import { ContentWrapper } from "my-material-theme-ui-components";
import BarGraph from "./Charts/BarGraph";
import LineGraph from "./Charts/LineGraph";
import ScatterChart from "./Charts/ScatterChart";


function Dashboards() {
  const [activeTab, setactiveTab] = useState<string>("Bar Graph");

  const handleTabClick = (tabName: string) => {
    setactiveTab(tabName);
  };

  const tabOptions: TabOptions[] = [
    {
      label: "Bar Graph",
      onClick: () => handleTabClick("Bar Graph"),
      isActive: activeTab === "Bar Graph",
    },
    {
      label: "Line Graph",
      onClick: () => handleTabClick("Line Graph"),
      isActive: activeTab === "Line Graph",
    },
    {
      label: "Scatter Chart",
      onClick: () => handleTabClick("Scatter Chart"),
      isActive: activeTab === "Scatter Chart",
    },
  ];

  return (
    <div className="gap-2 flex-1 d-flex flex-column">
      <PageHeader>
        <Header header="DashBoard" />
      </PageHeader>
      <div className="d-flex flex-1">
        <div className="bar-graph border col-9 d-flex flex-column gap-3">
          <div style={{ width: "fit-content" }}>
            <TabsComponent tabs={tabOptions} />
          </div>
          <ContentWrapper>
            {activeTab === "Bar Graph" ? (
              <BarGraph />
            ) : activeTab === "Line Graph" ? (
              <>
                <LineGraph />
              </>
            ) : (
              <>
                <ScatterChart />
              </>
            )}
            <div>hello</div>
            <div></div>
          </ContentWrapper>
        </div>
        <div className="filters"> filter</div>
      </div>
    </div>
  );
}

export default Dashboards;
