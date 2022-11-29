import React from "react";
/*
export const Prueba =  () => {
    const buscarguia=async (e)=>{
        e.preventDefault();
        const guia={};
        guia.username="geraldine";
        guia.id_guia=document.getElementById("trackNumber").value;
        console.log(guia);
        await fetch("http://localhost:8080/guia/buscar",{
        headers:{"Content-Type":"application/json"},
        mode: 'cors',
        method:"post",
        body: JSON.stringify(guia)
        }).then(res=> res.json())
        .then(res=> {console.log(res)})
        

    }
    return (
    <>
    <input id="trackNumber" type="text"></input>
    <button onClick={buscarguia}>click</button>
    
    </>
    );
};
*/

export const Prueba=()=>{
    const buscarguias=async (e)=>{
        e.preventDefault();
        const username="alex32api";
        await fetch(`http://localhost:8080/guias/todas/${username}`,{
            headers:{"Content-Type":"application/json"},
            mode: 'cors',
            method:"get",
            }).then(res=> res.json())
            .then(res=> {console.log(res)})
        

    }
    return (
    <>
    <button onClick={buscarguias}>Buscar todas las guias </button>
    </>
    );
}