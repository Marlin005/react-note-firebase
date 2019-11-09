import React, {useContext} from 'react' /*вар с хуком*/
//import {CSSTransition} from 'react-transition-group'
import {AlertContext} from '../context/alert/alertContext'




export const Alert = () => {
   const {alert, hide} = useContext(AlertContext)
  
   if (!alert.visible) {
   return null
 }
/* вариант без хука
export const Alert = ({alert}) => {
 // const {alert, hide} = useContext(AlertContext)
 if (!alert) {
  return null
}
*/
  return (
  
    
   /*   in={alert.visible}
      timeout={{
        enter: 500,
        exit: 350
      }}
      classNames={'alert'}
      mountOnEnter
      unmountOnExit
    >*/
      <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
        <strong>Внимание!</strong>
        &nbsp;{alert.text}
        <button onClick={hide} type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
  
  )
}
