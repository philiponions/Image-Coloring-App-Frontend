import React, { useState } from 'react'
import CardComp from '../Components/Card'

export default function Menu() {
    const [photoList, setPhotoList] = useState([
        {title: "Title 0", date: "5/1/2023"},
        {title: "Title 1", date: "5/1/2023"},
        {title: "Title 2", date: "5/1/2023"},
        {title: "Title 3", date: "5/1/2023"},
        {title: "Title 4", date: "5/1/2023"},
        {title: "Title 5", date: "5/1/2023"},
        {title: "Title 6", date: "5/1/2023"}
    ]);    
    
    return (
    <div style={styles.container}>
        <h1>My Photos 📷</h1>
        <div style={styles.listContainer}>           
            <div style={styles.list}>                
                {photoList.map((e) => {
                    return <CardComp title={e.title} date={e.date}/>
                })}                
            </div>
        </div>
    </div>
  )
}

const styles = {
    container: {
        margin: 50
    },
    list: {
        display: "flex",
        flexWrap: "wrap",                        
        gap: 20, 
        marginTop: 50,         
    },    
    listContainer: {
        display: "flex",               
        justifyContent: "center",
    }
}