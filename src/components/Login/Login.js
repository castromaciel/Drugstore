import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import './login.css'

function Login() {

  const[logged,setLogged] = useState(true)
  const { register, handleSubmit, formState: {errors} } = useForm({ defaultValues: { email: "", password: ""} });

  const onSubmit = async (data) => {
     fetch(`http://localhost:8000/login`,{
      method: 'POST',
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => {return res.json()})
      .then(json => {
        if(json.token){
          localStorage.setItem('token', json.token)
          localStorage.setItem('user', JSON.stringify(json.userdata))
          setLogged(true)
          window.location.replace('')
        }else{
          setLogged(false)
        }
      })  
  }

  return (
    <div>
      <form className="container" onSubmit={handleSubmit(onSubmit)}>
          <div className="mx-auto pt-2 form-group">
            <h5 className="ps-2">Email address</h5>
            <input type="email" className="form-control" placeholder="example@example.com" name="email" {...register("email", { required: true })} />
            {errors?.email?.type === "required" && <span><i className="bi bi-exclamation-octagon-fill me-2"></i>This field is required</span>}
          </div>
          <div className="mx-auto pt-2 form-group">
            <h5 className="ps-2">Password</h5>
            <input type="password" className="form-control" placeholder="Password" name="password" {...register("password", {required: true})} />
            {errors?.password?.type === "required" && <span ><i className="bi bi-exclamation-octagon-fill me-2"></i>This field is required</span>}
          </div>
          {logged?  true : (
            <div className="form-group fs-5 d-flex justify-content-center">
              <span><i className="bi bi-exclamation-octagon-fill me-2"></i>Email or Password invalids.</span>
            </div>
          )}
          <div className="mx-auto pt-2 form-group d-flex justify-content-end">
            <input type="submit" className="mt-2 btn btn-primary" value="Iniciar sesión" />
          </div>
      </form>
    </div>
  )
}

export default Login
