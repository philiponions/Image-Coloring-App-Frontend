import React from 'react'

function Add() {
  return (
    <div style={styles.container}>
        <div style={styles.contentBox}>
            <img width="400" height="300" src="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ"></img>
        </div>
    </div>
  )
}

const styles = {
    container: {
        height: "100vh",        
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    contentBox: {
        width: "50%",
        height: "80%",                
        backgroundColor: "green",
        display: "flex", 
        justifyContent: "center",
        overflow: "hidden"
    }
}

export default Add