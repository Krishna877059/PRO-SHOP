import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>
}

Message.defaultProps = {
  variant: 'info',
}

export default Message
// import React, { Children } from 'react'
// import {Alert} from 'react-bootstrap'
// const Message = ({variant,Children}) => {
//   return (
//     <Alert variant ={variant}>
//         {Children}
//     </Alert>
//   )
// }
// Message.defaultProps = {
//     variant:'info',
// }
// export default Message
