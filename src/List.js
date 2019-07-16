import React from "react" ;
import './App.css';
import Item1 from "./item1";
import Item2 from "./item2";
import Item3 from "./item3";
function List() {
return (
<div>
<ul style={{listStyle: "none"}}>
    <Item1/>
    <Item2/>
    <Item3/> 
</ul>
</div>
)
};
export default List ;