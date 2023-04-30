import { useState } from "react";


export default function Test() {

    const [state, setState] = useState({
      username : '',
      password : ''
    });
    
    return <>
        <div className="">TEST</div>
        <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setState(prev => ({...prev, username : e.target.value}))}} 
              name="username" value={state.username} placeholder="enter username"/>
        <input type="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setState(prev => ({...prev, password : e.target.value}))}}  
              name="password" id="password" value={state.password} placeholder="enter password" />
    </>
}