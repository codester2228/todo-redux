import * as React from "react";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";

const dropdownStyles = {
  dropdown: { width: 300, margin: "auto" },
};

const options = [
  { key: "ToDo", text: "ToDo" },
  { key: "Ongoing", text: "Ongoing" },
  { key: "Stalled", text: "Stalled" },
  { key: "Done", text: "Done" },
];

const DropDown = (props) => {
  return (
    <Dropdown
      placeholder="Select an option"
      label="Status"
      options={options}
      styles={dropdownStyles}
      onChange={(e) => {
        props.onChange(e.target.innerText);
      }}
    />
  );
};

export default DropDown;
