import React from "react";
import { useState, useEffect } from "react";

const randomstring = () => {
  return Math.random().toString(36).substring(2, 7);
};

const Avatar = ({count}) => {
  const [avatar, setAvatar] = useState([]);

  useEffect(() => {
    const newavatars=[];
    for(let i=0;i<count;i++){
        const randomstr=randomstring();
        const url= `https://api.multiavatar.com/${randomstr}.svg`
        newavatars.push(url);
    }
    setAvatar(newavatars);
  }, [count]);

  return (
<div>
    <div className=" flex flex-row w-36 h-36 p-5">

     {
        avatar.map((avatarurl,index)=>(
            <img key={index} src={avatarurl} alt="" className="mb-4"/>
        ))
     }
       
    </div>
</div>
  )
};

export default Avatar;
