// import React from "react";
import React, { useState, useEffect, Component } from "react";
import Tree from "react-d3-tree";
import "./custom-tree.css";
// import { Children } from "react";

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
// const org = {
//   name: "Root",
//   children: [
//     {
//       name: "etc",
//       attributes: {
//         department: "Production",
//       },
//       children: [
//         {
//           name: "Documents",
//           attributes: {
//             department: "Fabrication",
//           },
//           children: [
//             {
//               name: "cliclick.sh",
//             },
//           ],
//         },
//         {
//           name: "Desktop",
//           attributes: {
//             department: "Assembly",
//           },
//           children: [
//             {
//               name: "file.txt",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: "random",
//       attributes: {
//         department: "Pree",
//       },
//       children: [
//         {
//           name: "rm",
//           attributes: {
//             department: "ree",
//           },
//           children: [],
//         },
//       ],
//     },
//     {
//       name: "ran2",
//       attributes: {
//         department: "Priii",
//       },
//       children: [],
//     },
//   ],
// };


function Tree_component(props) {
  //console.log(props.dataObj);

  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    

    <div id="treeWrapper" style={{ width: "60em", height: "40em" }}>
      <Tree
        data={props.dataObj}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
      />
    </div> 
  );
}
export default Tree_component;
