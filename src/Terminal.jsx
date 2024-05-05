import { useEffect, useState, useRef } from "react";
import "./terminal.css";

function Terminal(props) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [depth, setDepth] = useState(props.dataObj.attributes.depth);
  const [currentID, setCurrentID] = useState(8);
  const [currentPosID, setCurrentPosID] = useState(0);


  const inputRef = useRef();


  useEffect(() => {
    // executes when Terminal is mounted to attract cursor to input element
    inputRef.current.focus();
  }, []);



  return (
    <>
      <div
        className="App"
        onClick={(e) => {
          inputRef.current.focus();
        }}
      >
        <div className="terminal">{output}</div>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              let newOutput = "";
              newOutput = output + "\n" + "$ " + input + "\n";

              if(input.slice(0,5) == "mkdir"){
                setCurrentID(currentID + 1);
                let childs = [];
                //use depth and currentPosID to figure out where to make the new node
                for (let i = 0; i <= depth; i++){
                  // childs = props.dataObj.children.map((x) => x);
                  childs = props.dataObj.children[1];
                  // console.log(childs.id);
                }


                //TODO: FIX RIGHT AFTER MAKING CD WORK
                //this snippet, when working, should allow for modification of children inside children of root
                //would need to use recursion to get any further (or hard code it?)
                // let childrenArr = [...props.dataObj.children];
                // console.log(childrenArr);
                // let newChildArr = [];
                // for(let i = 0; i < childrenArr.length; i++){
                //   if(childrenArr[i].attributes.id == currentPosID){
                //     console.log(childrenArr[i]);
                //     newChildArr = [
                //       ...childrenArr[i].children,
                //       {
                //         name: input.slice(5),
                //         attributes:{
                //           id: currentID,
                //           depth: depth + 1
                //         }, 
                //       }
                //     ]
                //   }
                //   childrenArr = newChildArr;
                // console.log(childrenArr);
                // }


                //put this in a loop that goes down to the correct child level?
                props.setDataObj({
                  ...props.dataObj,
                  attributes:{
                    ...props.dataObj.attributes
                  },
                  children:[
                    ...props.dataObj.children,
                    //how can i select which object in this array i want to access?
                    //list nodes with matching depth?
                    //check what child to go into by depth and currentPosID
                    {
                      name: input.slice(5),
                      attributes:{
                        id: currentID,
                        depth: depth + 1
                      },
                    }
                  ]
                })

                newOutput += "success";
                

              }else if(input.slice(0,5) == "touch"){
                //change color for files vs folders?
                setCurrentID(currentID + 1);
                props.setDataObj({
                  ...props.dataObj,
                  attributes:{
                    ...props.dataObj.attributes
                  },
                  children:[
                    ...props.dataObj.children,
                    {
                      name: input.slice(5),
                      attributes:{
                        id: currentID,
                        depth: depth + 1
                      },
                    }
                  ]
                })
                // newOutput += "new file created";
                

              }else if(input.slice(0,3) == "pwd"){
                //maybe increase functionality to follow cd?
                newOutput += "/" + props.dataObj.name;
                // print the file path to current pos
                

              }else if(input.slice(0,2) == "cd"){

                //DONT ALLOW EMPTY INPUT

                //TODO:
                  // take the input, and check if there is a child with matching name
                  // if none: error
                  // if exists: increment depth
                  // keep track of current position. ie. currentPosID

                if(input == "cd .."){
                  setDepth(depth - 1);
                  newOutput += "work in progress";
                }else{
                  for(let i = 0; i < props.dataObj.children.length; i++){
                    if(props.dataObj.children[i].name == input.slice(3)){
                      setCurrentPosID(props.dataObj.children[i].id);
                      break;
                    }
                  }
                  setDepth(depth + 1);
                  newOutput += "work in progress";
                }

              }else if(input.slice(0,2) == "ls"){
                if(input == "ls -i"){
                  // TODO: make sure this accurately represents inodes?
                  for (let i = 0; i < props.dataObj.children.length; i++){
                    if(i == props.dataObj.children.length - 1){
                      newOutput += (" " + props.dataObj.children[i].attributes.id + " " + props.dataObj.children[i].name); 
                      break;
                    }
                    newOutput += (" " + props.dataObj.children[i].attributes.id + " " + props.dataObj.children[i].name + "\n");
                  }
                }else{
                  for (let i = 0; i < props.dataObj.children.length; i++){
                    newOutput += (" " + props.dataObj.children[i].name);
                  }
                }
                


              }else if(input.slice(0,2) == "rm"){
                //ISSUE: doesnt update list of children when new nodes are created
                let newChildrenList = [...props.dataObj.children];

                for(let i = 0; i < newChildrenList.length; i++){
                  let currentChild = props.dataObj.children[i];

                  if(currentChild.name == input.slice(3)){
                    //makes a list containing the removed element from newChildrenList
                    let finalGoodList = newChildrenList.splice(i, 1);
                    //returns the dataObj without the selected child
                    props.setDataObj({
                      ...props.dataObj,
                      attributes:{
                        ...props.dataObj.attributes
                      },
                      children:[
                        ...newChildrenList,
                      ]
                    })
                  }else{
                    newOutput += "file not found"
                  }
                  break;
                }
              }else{
                newOutput += "command not found: " + input;
              }


              setOutput(newOutput);
              setInput("");
            }
          }}
        />
      </div>
    </>
  );
}
export default Terminal;
