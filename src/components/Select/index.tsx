import Select from "react-select";

interface SelectProps {
  options: { label: string; value: string }[];
  default: { label: string; value: string };
  onChangeEvent?: (value: any) => void;
}

function SelectComp(props: SelectProps) {
  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={props.default}
       
        isSearchable={false}
        name="color"
        options={props.options}
        styles={{
          control: (provided, state) => ({
            ...provided,
            backgroundColor: "transparent",
            borderColor: "#A3A252",
            "&:hover, &:focus, &:active": {
              borderColor:
                state.isFocused || state.menuIsOpen ? "#CCCB75" : "#A3A252",
            },
            boxShadow: state.isFocused ? "0 0 0 1px #A3A252" : "none",
            borderRadius: "0.75rem",
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? "#A3A252" : "",
            color: state.isSelected ? "white" : "black",
            borderRadius: "0.25rem",
            marginBottom: "0.25rem",
            "&:hover": {
              backgroundColor: state.isSelected ? "#A3A252" : "#A3A2521A",
            },
            cursor: "pointer",
          }),
          singleValue: (provided) => ({
            ...provided,
            color: "black",
          }),
          menuList: (provided) => ({
            ...provided,
            backgroundColor: "#F3F3F3",
            borderRadius: "0.25rem",
            padding: "4px",
          }),
        }}
        onChange={props.onChangeEvent}
      />
    </>
  );
}

export default SelectComp;
