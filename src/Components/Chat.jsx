import { collection, onSnapshot, orderBy, query, } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Message from "./Message";
import { db } from "../firebase";
import SendMessage from "./SendMessage";

const style={
    main:`flex flex-col p-[10px] py-12 `
}
const Chat = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();
  
    useEffect(() => {
      const q = query(collection(db, 'messages'), orderBy('timestamp'));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let messages = [];
        querySnapshot.forEach((doc) => {
          messages.push({ ...doc.data(), id: doc.id });
        });
        setMessages(messages);
      });
      return () => unsubscribe();
    }, []);


    return ( 
        <>
        <main className={style.main}>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
        {/*send Message components */}
        <SendMessage scroll={scroll}/>
        <span ref={scroll}></span>
        </>
        
     );
}
 
export default Chat;