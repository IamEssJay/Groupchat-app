import React from "react";

const style={
    message:`flex items-center shadow-xl m-4 py-2 px-3x rounded-tl-full rounded-tr-full`,
    name:`fixed mt-[-4rem] text-gray-600 text-xs`,
    received:`bg-[#e5e5ea] text-black float-left rounded--br-full`,
    sent:`bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`
}

const Message = () => {
    return (
        <div className={style.message}>
            <p className={style.name}>Dave</p>
            <p>I'm learning react!</p>
        </div>
      );
}
 
export default Message;