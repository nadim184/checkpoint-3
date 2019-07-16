import React from "react" ;
import './App.css';
function Item1(){
    let home="Home";
    return (
        <div className="all">
            <div className="item1">
              <li style={{textDecoration:"none"}}> <a className="lin" href="#">{home}</a> </li>
            </div>

        </div>
    )
};
export default Item1;