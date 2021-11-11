import React from 'react';
import { useState } from 'react';
import '../index.css';
import BinarySearchTree from '../BST-Tree/BST';


export function Actionsection(){
  const treeview= document.getElementById('canvas1')
  const tree = new BinarySearchTree(treeview); 

  const[insertText, setinsertText]=useState("");

  
  const clearBST=(event)=>{
    event.preventDefault();
     tree.clear();
  }

  const insertNode=(event)=>{
    event.preventDefault();
  }
  const insertChange=(event)=>{
      event.preventDefault();
      console.log(event.target.value);
      setinsertText(event.target.value);

  }

  const insert = (event) => {
    try{
    event.preventDefault();
    console.log('before tree insert');
   const value=parseInt(insertText);
   if (isNaN(value)) throw 'Try to enter integer again.';
   console.log('before tree insert');
     tree.insert(value);
     console.log('after tree insert')
     setinsertText("");
  }catch(errorMsg){
    alert(errorMsg);
    setinsertText("");
  }
}
//     try {
//        event.preventDefault();
//        const value = parseInt(input.value);
//        if (isNaN(value)) throw 'Try to enter integer again.';
//        tree.insert(value);
//        input.value = '';
//        input.focus();
//     } catch (errorMsg) {
//        alert(errorMsg);
//        input.value = '';
//        input.focus();
//     }
//  };

    return (
    <form className="section">
       <input type="text" className="userinput" value={insertText} onChange={insertChange}  />
       <input type="submit" id="usersubmit" value="insert" onSubmit={insertNode}/> 
       <input type="text" className="userinput" value=""  />
       <input type="submit" id="usersubmit" value="remove" /> 
       <input type="submit" id="usersubmit" value="clearAll" onClick={clearBST}/> 
     </form>

    )
}