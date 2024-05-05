import React, { useState } from "react";
// import "./tree.css";
import Tree from "react-d3-tree";
import Terminal from "./Terminal.jsx";
import Tree_component from "./Tree_component.jsx";
// import "./App.css";


//prefilled
const treeData = {
  name: "Root",
  attributes:{
    depth: 0,
    id: 1,
  },
  children: [
    {
      name: "cte",
      attributes: {
        depth: 1,
        id: 2,
      },
    },
    {
      name: "etc",
      attributes: {
        depth: 1,
        id: 3
      },
      children: [
        {
          name: "Documents",
          attributes: {
            depth: 2,
            id: 4,
          },
          children: [
            {
              name: "cliclick.sh",
              attributes: {
                depth: 3,
                id: 5,
              },
            },
          ],
        },
        {
          name: "Desktop",
          attributes: {
            depth: 2, 
            id: 6,
          },
          children: [
            {
              name: "file.txt",
              attributes: {
                depth: 3,
                id: 7,
              },
            },
          ],
        },
      ],
    },
  ],
};

//from scratch
// const treeData = {
//   name: "Root",
//   attributes:{
//     depth: 0
//   },
//   children: [],
// };



function App() {
  // const [data, setData] = useState({ treeData });
  const [data, setData] = useState({ ...treeData });

  // function getArrayDepth(value) {
  //   return Array.isArray(value) ? 
  //     1 + Math.max(0, ...value.map(getArrayDepth)) :
  //     0;
  // }
  
  
  
  // let testRy = [1,2,[3,4,[5,6],7,[8,[9,91]],10],11,12]
  
  // console.log("testRy " + testRy);
  
  // console.log("testRy depth " + getArrayDepth(testRy))
  
  // console.log("testRy " + testRy);



  // let randArr = ["test", "test2", "test3"];

  // for(let i = 0; i <)



  return (
    <>
      <section className="container">
        <div className="one">
          <Tree_component dataObj={data} setDataObj={setData} />
        </div>
        <div className="two">
          <Terminal dataObj={data} setDataObj={setData} />
        </div>
      </section>
    </>
  );
}

export default App;
