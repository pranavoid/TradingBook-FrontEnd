import React from 'react'

interface Props{
    params : {
        BrokerName : string;
    }
}

const BrokerDynamicLink = ({params : {BrokerName}} : Props) => {
  return (
    <><h1>Connect to {BrokerName}</h1></>
  )
}

export default BrokerDynamicLink