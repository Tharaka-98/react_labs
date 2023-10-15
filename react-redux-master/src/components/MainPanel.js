import React from "react";
import MyButton from "./MyButton";
import DivPanel from "./DivPanel";

const MainPanel = () => {
  return (
    <div>
      This is main panel <MyButton></MyButton>
      <DivPanel></DivPanel>
    </div>
  );
};
export default MainPanel;

// MyButton is a button component. The application maintains a counter 
// which keeps track of the number of times the button is clicked. 
// The value of this counter will be displayed in the DivPanel. 
// The content of DivPanel will be automatically refreshed everytime 
// the counter value changes. These are effectively two different components.
