import React from 'react'
import { useParams } from "react-router-dom";

function ViewUser() {
    let params= useParams()
  return (
    <>UserView{params.id}</>
  )
}

export default ViewUser