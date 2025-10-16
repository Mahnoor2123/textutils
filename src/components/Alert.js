
import React from 'react'
const Capitalize=(word)=>{
const lower = word.toLowerCase();
return lower.charAt(0).toUpperCase() + lower.slice(1);
}
const Alert = (props) => {
  return (
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{Capitalize(props.alert.type)}:{props.alert.msg}</strong>
  
</div>
  )
}

export default Alert

