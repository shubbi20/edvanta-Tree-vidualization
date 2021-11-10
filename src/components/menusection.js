import React from 'react';
import '../index.css';

export function Actionsection(){
    return (
    <form className="section">
       <input type="text" className="userinput" value=""   />
       <input type="submit" id="usersubmit" value="insert"/> 
       <input type="text" className="userinput" value=""  />
       <input type="submit" id="usersubmit" value="remove"/> 
     </form>

    )
}