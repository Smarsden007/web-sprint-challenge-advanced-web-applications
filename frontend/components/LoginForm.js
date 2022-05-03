import React, { useState } from 'react'
import { useHistory } from 'react';
import PT from 'prop-types'
import axios from 'axios'

const initialFormValues = {
  username: '',
  password: '',
}
export default function LoginForm(props) {
  const [values, setValues] = useState(initialFormValues)
  //changes made by me below

  // ✨ where are my props? Destructure them here

  const handleTextChange = (event) => {
    enableButton(event.target.value)
  }

  const onChange = evt => {
    const { id, value } = evt.target
    setValues({ ...values, [id]: value })
  }

  const onSubmit = evt => {
    // evt.preventDefault()
    // axios.post('http://localhost:9000/api/login')
    // .then(resp => {
    //   localStorage.setItem("token", resp.data.payload)
    //   //Funton here for spinner?
    //   push('/articles')
    // })
    // .catch(err=>
    //   console.log(err))
    // // ✨ implement

    // //POST Here??
  }

  const isDisabled = () => {
    evt.preventDefault();


      //if else statement here or switch statement?
    // ✨ implement
    // Trimmed username must be >= 3, and
    // trimmed password must be >= 8 for
    // the button to become enabled
  }

  return (
    <form id="loginForm" onSubmit={onSubmit}>
      <h2>Login</h2>
      <input
        maxLength={20}
        value={values.username}
        onChange={onChange}
        placeholder="Enter username"
        id="username"
      />
      <input
        maxLength={20}
        value={values.password}
        onChange={onChange}
        placeholder="Enter password"
        id="password"
      />
      <button disabled={isDisabled()} id="submitCredentials">Submit credentials</button>
    </form>
  )
}

// 🔥 No touchy: LoginForm expects the following props exactly:
LoginForm.propTypes = {
  login: PT.func.isRequired,
}
