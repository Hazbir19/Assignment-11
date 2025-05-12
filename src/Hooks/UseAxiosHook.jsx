import axios from 'axios'
import React from 'react'
export const AxiosHook = axios.create({
  baseURL: 'http://localhost:5004',})
 const UseAxiosHook = () => {
    return AxiosHook;
}

export default UseAxiosHook