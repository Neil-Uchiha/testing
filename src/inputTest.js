import { API } from 'aws-amplify';
import React, { useState } from 'react';
import './App.css';
export const emailValidation = (testemail) => {
    const regEx = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
    if (regEx.test(testemail)){
        console.log("valid")
    }else if(testemail != ""){
        console.log("not valid")
    }else {
        console.log("not valid")
    }
}

export const phoneValidation = (testno) => {
    if(testno.length==10){
        if(testno.startsWith("7") || testno.startsWith("8") || testno.startsWith("9")){
            console.log("valid")
        }else{
            console.log("not valid")
        }
    }else{
        console.log("not valid")
    }
}