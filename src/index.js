import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Avatar from "./Avatar"
import Message from "./Message"
import NameWithHandle from "./NameWithHandle"
import Time from "./Time"
import ReplyButton from "./ReplyButton"
import RetweetButton from "./RetweetButton"
import LikeButton from "./LikeButton"
import MoreOptions from "./MoreOptions"
function Tweet(){
  return(
    <div className="tweet">
    <Avatar/>
    
    <div className ="content">
    <Message/>
    <NameWithHandle/><Time/>
   <div className ="button">
<ReplyButton/>
<RetweetButton/>
<LikeButton/>
<MoreOptions/>
   </div>
</div>
 </div>
    
  );
}
ReactDOM.render(<Tweet/>,document.querySelector("#root"))