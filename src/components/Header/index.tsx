import { HeaderText, SubHeaderText } from "./styles";
interface headerProps {
  header?: string;
  subHeader?: string;
}

function Header(props: headerProps) {
  return (
    <>
      {props.header && <HeaderText>{props.header}</HeaderText>}
      {props.subHeader && <SubHeaderText>{props.subHeader}</SubHeaderText>}
    </>
  );
}

export default Header;
