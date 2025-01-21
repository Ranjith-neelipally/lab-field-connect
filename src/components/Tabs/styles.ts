import { styled } from "my-material-theme-ui-components";

export const StyledTabs = styled.div`
  border: 1px solid #cac7b5;
  display: flex;
  background-color: #cac7b5;
  border-radius: 12px;
  width: fit-content;
  padding: 4px 0;

  .tab {
    font-size: 0.8rem;
    padding: 6px;
    border-radius: 12px;
  }

  .active {
    font-weight: 500;
    background-color: #cccb75;
  }
`;
