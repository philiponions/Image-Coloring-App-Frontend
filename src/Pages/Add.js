import React from 'react'
import { Button, Form } from 'react-bootstrap'

function Add() {
  return (
    <div style={styles.container}>
        <div style={styles.contentBox}>
            <img width="400" height="300" src="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ"></img>            
            <input style={styles.input} type="file"/>              
            <center style={styles.formContainer}>
                <Form.Control/>            
                <Form.Label >Add a title</Form.Label>
                <div style={styles.buttonsContainer} className="d-grid gap-2">
                    <Button variant="warning" size="lg" >Process Image</Button>{' '}
                    <Button variant="primary" size="lg">Add Image</Button>{' '}          
                </div>
            </center>
        </div>
    </div>
  )
}

const styles = {
    container: {
        height: "100vh",        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",    
    },
    contentBox: {
        width: "50%",
        height: "80%",                          
        display: "flex",
        flexDirection: "column",    
        justifyContent: "center", 
        alignItems: "center",     
        overflow: "hidden",
        marginBottom: 100,
        
    },
    input: {
        marginTop: 20
    },
    buttonsContainer: {        
        display: "flex",
        flexDirection: "column",
        gap: 20,                
        width: "50%",
        marginTop: 20
    },
    formContainer: {
        marginTop: 50,
        width: "70%",                        
    }
}

export default Add