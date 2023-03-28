import React from "react";
import {auth} from "../firebase"

const style={
    button:`bg-blue-200 px-4 py-2 hover:bg-blue-100`
}

const SignOut = () => {


    return (
        <button onClick={()=>auth.signOut()} className={style.button}>
            Signout
        </button>
      );
}
 
export default SignOut;