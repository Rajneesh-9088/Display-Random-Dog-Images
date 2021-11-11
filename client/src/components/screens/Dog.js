import React from 'react'

const Dog = (props) => {
    return (
        <div className="child center"  >
           <img  style={{width: 500, height: 350}}  src={props.url} />
           
        </div>
    )
}

export default Dog
