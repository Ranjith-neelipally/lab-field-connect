import { styled } from "my-material-theme-ui-components";

export const ChartContainer = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  overflow-y: auto;

  .chart {
    flex: 1;
    margin: 4px;
    min-width: 48%;
    max-width: 50%;
    background-color: white;
    padding: 12px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
  }
`;

export const ContentWrapper = styled.section`
  display: flex;
  background-color: #cac7b5;
  flex: 1;
  border-radius: 12px;
  padding: 8px;
`;
