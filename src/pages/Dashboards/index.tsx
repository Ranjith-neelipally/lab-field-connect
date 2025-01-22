import { useState } from "react";
import { TabOptions } from "../../components/Tabs";
import TabsComponent from "../../components/Tabs";
import Header from "../../components/Header";
import PageHeader from "../../components/PageHeader";
import BarGraph from "./Charts/BarGraph";
import LineGraph from "./Charts/LineGraph";
import ScatterChart from "./Charts/ScatterChart";
import SelectComp from "../../components/Select";
import {
  BarGraphOptions,
  FilterOptions,
  Germinationdata,
  GerminationLineData,
  GerminationLineDeviationData,
  GerminationLineMeanData,
  InsectRateData,
  PlantHeightData,
} from "./Sampledata";
import { ChartContainer, ContentWrapper } from "./styles";
import { HeaderText, SubHeaderText } from "../../components/Header/styles";
interface options {
  label: string;
  value: string;
}

function Dashboards() {
  const [activeTab, setactiveTab] = useState<string>("Bar Graph");
  const [data, setdata] = useState<any>(Germinationdata);
  const [lineData, setlineData] = useState<any>(false);
  const [lineKey, setlineKey] = useState<string>();
  const [headerText, setheaderText] = useState("Germination Rate");
  const handleTabClick = (tabName: string) => {
    setactiveTab(tabName);
  };

  const handleOptionClick = (option: options) => {
    console.log(option);

    if (option.value === "germination_rate") {
      setdata(Germinationdata);
      setheaderText("Germination Rate");
    } else if (option.value === "plant_height") {
      setdata(PlantHeightData);
      setheaderText("Plant Height");
    } else if (option.value === "insect_count") {
      setdata(InsectRateData);
      setheaderText("Insect Count");
    }
  };

  const handleFilters = (option: options) => {
    if (option.value === "average") {
      setlineData(GerminationLineData);
      setlineKey("avg");
    } else if (option.value === "meanData") {
      setlineData(GerminationLineMeanData);
      setlineKey("mean");
    } else if (option.value === "deviation") {
      setlineData(GerminationLineDeviationData);
      setlineKey("deviation");
    } else if (option.value === "none") {
      setlineData(false);
    }
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
        <div className="bar-graph d-flex flex-column gap-3">
          <div className="d-flex gap-3 align-items-center flex-1 justify-content-between pe-3">
            <div className="d-flex gap-4 align-items-center">
              <HeaderText className="m-0">{headerText}</HeaderText>
              <TabsComponent tabs={tabOptions} />
            </div>
            <div className="d-flex gap-3 align-items-center">
              <SelectComp
                options={BarGraphOptions}
                default={BarGraphOptions[0]}
                onChangeEvent={handleOptionClick}
              />
              {activeTab === "Bar Graph" && (
                <div className="d-flex gap-2 align-items-center">
                  <Header subHeader="Filter" />
                  <SelectComp
                    options={FilterOptions}
                    default={FilterOptions[0]}
                    onChangeEvent={handleFilters}
                  />
                </div>
              )}
            </div>
          </div>
          <ContentWrapper>
            <ChartContainer>
              {activeTab === "Bar Graph" ? (
                <>
                  {data &&
                    data.map((data: any, index: number) => (
                      <div className="chart col-6" key={index}>
                        <SubHeaderText className="text-center">
                          {data.title}
                        </SubHeaderText>
                        <BarGraph
                          dashboardData={[data]}
                          LineData={lineData}
                          lineKey={lineKey}
                        />
                      </div>
                    ))}
                </>
              ) : activeTab === "Line Graph" ? (
                <>
                  {data &&
                    data.map((data: any, index: number) => (
                      <div className="chart col-6" key={index}>
                        <SubHeaderText className="text-center">
                          {data.title}
                        </SubHeaderText>
                        <LineGraph dashboardData={[data]} />
                      </div>
                    ))}
                </>
              ) : (
                <>
                  {data &&
                    data.map((data: any, index: number) => (
                      <div className="chart col-6" key={index}>
                        <SubHeaderText className="text-center">
                          {data.title}
                        </SubHeaderText>
                        <ScatterChart dashboardData={[data]} />
                      </div>
                    ))}
                </>
              )}
            </ChartContainer>
          </ContentWrapper>
        </div>
      </div>
    </div>
  );
}

export default Dashboards;
