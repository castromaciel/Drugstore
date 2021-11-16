import React,{ useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
function Profile() {

  const userLog = JSON.parse(localStorage.getItem('user'))
  const [user,setUser] = useState(null)
  const[registerErrors,setregisterErrors] = useState([])
  const {register, handleSubmit, formState: {errors} } = useForm()
  
  const onSubmit = data => {
    console.log(data)
    // fetch(`http://localhost:8000/users/${userLog.id}`,{
    //   method: 'PATCH',
    //   body: JSON.stringify({
    //     username: data.username,
    //     email: data.email,
    //   }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    //   .then(res => res.json())
    //   .then(json => setregisterErrors(json.errors))  
  }

  useEffect(() => {
    fetch(`http://localhost:8000/users/${userLog.id}`)
      .then(res => res.json())
      .then(user => setUser(user))
  }, [userLog?.id,setUser])

  return (
    <div>
      {
        user? 
        <div>
          <form className="container my-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="mx-auto pt-3 form-group ">
              <div className="d-flex flex-lg-row justify-content-lg-between flex-column align-items-center">
                <img src={user.img} alt="Foto de perfil" className="col-6 col-lg-2 border rounded-circle"/>
                <div className="col-10 col-lg-9">
                  <div className="col-lg-12 mx-auto pt-3 form-group">
                    <h5 className="ps-2">Username</h5>
                    <input type="text" className="form-control" disabled value={user.username} placeholder="Username" name="username" {...register("username", {required: true} )}/>
                  </div>
                  <div className="col-lg-12 mx-auto pt-3 form-group">
                    <h5 className="ps-2">Profile photo</h5>
                    <input type="text" className="form-control" value={user.img}placeholder="imgurl" name="profilephoto" {...register("profilephoto", {required: true})} />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-md-flex row justify-content-center ">
              <div className="pt-3 form-group col-10 col-lg-6">
                <h5 className="ps-2">Email address</h5>
                <input type="text" className="form-control" disabled value={user.email} placeholder="example@example.com" name="email" {...register("email", {required: true, pattern:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/})} />
                {errors?.email?.type === "required" && <span><i className="bi bi-exclamation-octagon-fill me-2"></i>This field is required</span>}
                {errors?.email?.type === 'pattern' && <span><i className="bi bi-exclamation-octagon-fill me-2"></i>Insert a valid mail</span> }
                { registerErrors?.map(error => 
                  (error?.param === 'email' && <span><i className="bi bi-exclamation-octagon-fill me-2"></i>{error.msg}</span>))
                }
              </div>
              <div className="pt-3 form-group col-10 col-lg-6">
                <h5 className="ps-2">Nombre y apellido</h5>
                <input type="text" className="form-control" placeholder="Nombre y apellido" value="" name="nameSurname" {...register("nameSurname", {required: true})} />
              </div>
              <div className="pt-3 form-group col-10 col-lg-6">
                <h5 className="ps-2">Código Postal</h5>
                <input type="text" className="form-control" value="" placeholder="Ej: 4000" name="postalcode" {...register("postalcode", {required: true})} />
              </div>
              <div className="pt-3 form-group col-10 col-lg-6">
                <h5 className="ps-2">Provincia</h5>
                <input type="text" className="form-control" value="" placeholder="Provincia" name="province" {...register("province", {required: true})} />
              </div>
              <div className="pt-3 form-group col-10 col-lg-6">
                <h5 className="ps-2">Localidad / Barrio</h5>
                <input type="text" className="form-control" value="" placeholder="Localidad / Barrio" name="city" {...register("city", {required: true})} />
              </div>
              <div className="pt-3 form-group col-10 col-lg-6">
                <h5 className="ps-2">Calle</h5>
                <input type="text" className="form-control" value="" placeholder="Calle" name="address" {...register("address", {required: true})} />
              </div>
              <div className="pt-3 form-group col-10 col-lg-6">
                <h5 className="ps-2">Número</h5>
                <input type="text" className="form-control" value="" placeholder="Número" name="number" {...register("number", {required: true})} />
              </div>
              <div className="pt-3 form-group col-10 col-lg-6">
                <h5 className="ps-2">Piso / Departamento</h5>
                <input type="text" className="form-control" value="" placeholder="Piso / Departamento (Opcional)" name="number" {...register("number")} />
              </div>
              
              
            </div>
            <div className="mx-auto pt-3 form-group d-flex justify-content-end">
              <input type="submit" className="mt-2 btn btn-primary" value="Modificar" />
            </div>
          </form>
        </div>
        :<h1>No hay usuario</h1>
      }

      
    </div>
  )
}

export default Profile