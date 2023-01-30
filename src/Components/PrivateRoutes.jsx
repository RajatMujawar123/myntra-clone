import React from 'react'
import { children } from 'react';
import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import {AppContext} from "../Context/AppContextProvider"

const Private = ({children}) => {

    const {ath}=useContext(AppContext);
    if(!ath){
        return<Navigate to="/Profile"/>
    }
    return children
  
}

export default Private