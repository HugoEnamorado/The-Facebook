import React from 'react';
import ProType from 'prop-type';
import './Comments.ccs'

const Comments = ({ Comments, addComments, changeText, ValueText}) =>{
  const handleChange = (event) => {
      changeText(event.target.value)
  }

  const handleClick = () =>{
   addComments(ValueText);

  }
  const handleClick = comments.map((element, index) =>{
return (
<div className = 'Comments' key ={index}>
  <div className = 'User'>  </div>
 <span className = 'Text'>{element.value}  </span>
</div>

)
     
  });


  
}



