import React from "react";
import { PageHeaderWrapper } from "./styles";

function PageHeader({ children }: React.PropsWithChildren<{}>) {
  return <PageHeaderWrapper>{children}</PageHeaderWrapper>;
}

export default PageHeader;
