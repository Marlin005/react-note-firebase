import React, {Fragment, useContext, useEffect} from 'react'
import {Form} from '../components/Form'
import {Notes} from '../components/Notes'
import {FirebaseContext} from '../context/firebase/firebaseContext'
import {Loader} from '../components/Loader'

export const Home = () => {
  //временный state
/*const notes = new Array(3).fill('')
  .map(([], i) => ({id: i, title: `Note ${i + 1}`}))*/ 


  const {loading, notes, fetchNotes, removeNote} =
   useContext(FirebaseContext)
   
     //хук useEffect эмулирует getmounted */

   useEffect(() => {
    fetchNotes()
    // eslint-disable-next-line
  }, [])

   
  return (
    <Fragment>
      <Form />

      <hr/>

      {loading
        ? <Loader />
        : <Notes notes={notes} onRemove={removeNote} />
      }
    </Fragment>
  )
}
