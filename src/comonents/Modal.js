import React from "react";
import "./Modal.css"

function Modal(props) {
  const datas = [
    {
      name: "Font Color",
      color: "#444444",
    },
    {
      name: "Backgraund Color",
      color: "#FFFFFF",
    },
    {
      name: "Button Color",
      color: "#2072EF",
    },
    {
      name: "Button Border Color",
      color: "#2072EF",
    },
    {
      name: "Buton Mouseover Color",
      color: "#0053D1",
    },
  ];
  return (
    <div className="modalBackground" >
      <div className="modalContainer">
        <div className="header">
          <h3 className="title">Theme Color</h3>
          <p className="edit">Change Theme</p>
        </div>
        <div className="card">
            
            {datas.map((data)=>{
                return(
                    <div className="data">
                <div>
                    {data.name}
                </div>
                <div className="color">
                {data.color}
                <div className="colorBox" style={{backgroundColor:data.color}}></div>
                </div>
                </div>
                );})}
                <div className="footer">
                    <div className="cancelBtn" onClick={props.onClose}>
                        Cancel
                    </div>
                    <div className="saveBtn" onClick={props.onClose}>
                        Save
                    </div>
                </div>
            </div>
            
      </div>
    </div>
  );
}

export default Modal;
