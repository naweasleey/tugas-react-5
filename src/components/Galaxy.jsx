import React from 'react'

const Galaxy = (props) => {

  return (
    <div style={
      {
        backgroundColor: "#b195c1", 
        borderRadius: 8, 
        width: 200,
        padding: 10,
      }}>
      <h4>({props.id}) {props.name}</h4>
      <p>Diameter : {props.diameter}</p>
    </div>
  )
}

export default Galaxy