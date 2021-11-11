import React from 'react'
import Dog from './Dog';
import './DogList.css'
const DogList = (props) => {
    
    const dogsArray = props.dogs.map((dogUrl) => {
          return <Dog url={dogUrl} />
    })

    return (
        <div className="container" >
             {dogsArray}
        </div>
    )
}

export default DogList
