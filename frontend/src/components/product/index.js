import React from "react";
import Progressbar from "../progressbar/progressbar";

export default () => {
  return (
      <div id="product">
        <div className={"row"}>
          <div className={"col-md-5"}>
            <img src={"/static/assets/imgs/empty.png"} className={"rounded"} alt={"preview"} height={"300px"}/>
          </div>
          <div className={"offset-md-1 col-md-5"}>
              <p>Describe the product</p>
          </div>
        </div>
      </div>
  )
}