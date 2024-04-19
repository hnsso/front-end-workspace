import React from "react";
import { Component, useEffect, useState } from "react";
import {styled-Component} from
import { selectAll, update, moviedelete } from "../api/movie"; 

Stlyed <Div>`


`

const Detail = () => {
    const[delete, setDelete] = useState("");

    const OnDelete = () =>{
        moviedelete();
    }

    useEffect(()=>{

    },[
        setDelete
    ])


    return (<Div>
        <div>  
            <a href="">영화 목록</a>
            <a href="">영화 정보 추가</a>
        </div>
        <h1>영화 목록</h1>
        <tr>
            <td className=""></td>
            <td className=""></td>
            <td className=""></td>
            <td><button onClick={OnDelete}>삭제</button></td>
        </tr>  
    </Div>
)};

export default Detail;
