import React from "react";
import "./tabs.css";
import { useSelector,useDispatch } from "react-redux";
function Tabs() {
  const arr = ["live", "recent", "upcoming"];
  const dispatch = useDispatch();
   const { matchType } = useSelector(
     (state) => state.matches
   );
  
  return (
    <div className="tabsCont">
      {arr.map((val) => {
        return (
          <div
            id={matchType == val ? "selected" : null}
            onClick={() => dispatch({type:"changeMatchType",payload:val})}
          >
            {val}
          </div>
        );
      })}
    </div>
  );
}

export default Tabs;
