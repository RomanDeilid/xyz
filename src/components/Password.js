import React, { useState } from "react";


const Password = () => {

    const [password, setPassword] = useState('************')
    const [count, setCount] = useState(0)

    const generator = () => {
        let newPassword = ''
        const chars='0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*(){}<>?,./'
        for (let i = 0; i < 12; i++) {
            newPassword += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        setPassword(newPassword)
        setCount(count+1)
        
    }


    // function copy (){
        // var content=document.getElementById("password").getElementsByClassName("password"); 
        // content.focus()
        // content.select()
        // .select(); 
        // const range = document.createRange();
        // range.selectNodeContents(content);
        // const selection = window.getSelection();
        // selection.removeAllRanges();
        // selection.addRange(range);
        //  alert( String(password))
        // document.execCommand("copy")
        // navigator.clipboard.writeText(String(content))
        // }
    
    return (
        <>
            <div className="wrapper">
                <div  className="password">{password}</div>
                <div className="count"> Количество генераций: {count}</div>
                <div>
                    <button onClick={generator} className="generate-password">Сгенирировать</button>
                     <button  onClick={()=>{navigator.clipboard.writeText(password)}} className="copy-password" >Скопировать</button> 
                     {/* <CopyToClipboard onCopy={onClick} text={password}>copy</CopyToClipboard>  */}
                    
                </div>
            </div>
        </>
    )
}

export default Password;