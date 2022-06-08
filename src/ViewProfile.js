import React from 'react'
import { useParams } from "react-router-dom";

function ViewProfile() {
    let params= useParams()
  return (
    <>ViewProfile{params.id}</>
  )
}

export default ViewProfile