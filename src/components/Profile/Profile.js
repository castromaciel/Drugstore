import React,{ useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
function Profile() {

  const userLog = JSON.parse(localStorage.getItem('user'))
  const [disabled,setDisabled] = useState(true)
  const [user,setUser] = useState({})
  const [auxUser, setAuxUser] = useState({})
  const {register, handleSubmit, formState: {errors} } = useForm()
  
  const onSubmit = async data => {
    await fetch(`https://apidrogueriaoasis.herokuapp.com/users/${userLog.id}`,{
      method: 'PUT',
      body: JSON.stringify({
        img: data.profilephoto,
        nameSurname: data.nameSurname,
        postalcode:data.postalcode,
        province: data.province,
        city: data.city,
        street: data.street,
        number: data.number,
        apartment: data.apartment,
        phonenumber: data.phonenumber 
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('user', JSON.stringify(json.userdata))
        setDisabled(true)
      })  
  }

  useEffect(() => {
    fetch(`https://apidrogueriaoasis.herokuapp.com/users/${userLog.id}`)
      .then(res => res.json())
      .then(user => {
        setUser(user)
        setAuxUser(user)
      })
  }, [userLog?.id,setUser,setAuxUser])

  return (
    <div>
      {
        auxUser? 
        <div>
          <form className="container my-3" onSubmit={handleSubmit(onSubmit)}>
            <div className="mx-auto pt-3 form-group ">
              <div className="d-flex flex-lg-row justify-content-lg-between flex-column align-items-center">
                <img src={auxUser.img} alt="Foto de perfil" className="col-6 col-lg-2 border rounded-circle"/>
                <div className="col-10 col-lg-9">
                  <div className="col-lg-12 mx-auto pt-3 form-group">
                    <h5 className="ps-2">Usuario</h5>
                    <input type="text" className="form-control" disabled value={auxUser.username} placeholder="Nombre de usuario" name="username" />
                  </div>
                  <div className="col-lg-12 mx-auto pt-3 form-group">
                    <h5 className="ps-2">Correo electrónico</h5>
                    <input type="text" className="form-control" disabled value={auxUser.email} placeholder="example@example.com" name="email" />
                  </div>
                  <div className="col-lg-12 mx-auto pt-3 form-group">
                    <h5 className="ps-2">Profile photo</h5>
                    <input type="text" className="form-control" disabled={disabled} value ={auxUser.img} placeholder="url de imagen" name="profilephoto" {...register("profilephoto", {required: true})} 
                    onChange={(e) => setAuxUser({...auxUser, img: e.target.value}) }/>
                    {errors?.profilephoto?.type === "required" && <span><i className="bi bi-exclamation-octagon-fill me-2"></i>Este campo es obligatorio</span>}
                  </div>
                </div>
              </div>
            </div>
              {disabled? 
                <div className="py-3 d-flex flex-lg-row justify-content-lg-end flex-column align-items-center mt-3 form-group col-12 col-lg-12">
                  <h4>Añadir datos de envío: </h4>
                  <input type="button" className="ms-lg-3 btn btn-info" value="Modificar" onClick={()=>setDisabled(false)}/>
                </div> : 
                <div>
                  <div className="d-md-flex row justify-content-center">
                    <div className="pt-3 form-group col-10 col-lg-6">
                      <h5 className="ps-2">Nombre y apellido</h5>
                      <input type="text" className="form-control" maxLength="30" minLength="5" value={auxUser.nameSurname} placeholder="Nombre y apellido" name="nameSurname" {...register("nameSurname", {required: true, minLength:5})} onChange={(e) => setAuxUser({...auxUser, nameSurname: e.target.value}) }/>
                      {errors?.nameSurname?.type === "required" && <span><i className="bi bi-exclamation-octagon-fill me-2"></i>Este campo es obligatorio</span>}
                      {errors?.nameSurname?.type === "minLength" && <span><i className="bi bi-exclamation-octagon-fill me-2"></i>Debe tener al menos 5 carácteres</span>}
                    </div>
                    <div className="pt-3 form-group col-10 col-lg-6">
                      <h5 className="ps-2">Código Postal</h5>
                      <input type="number" className="form-control" value={auxUser.postalcode} placeholder="Ej: 4000" name="postalcode" {...register("postalcode", {required: true})} onChange={(e) => setAuxUser({...auxUser, postalcode: e.target.value}) } />
                      {errors?.postalcode?.type === "required" && <span><i className="bi bi-exclamation-octagon-fill me-2"></i>Este campo es obligatorio</span>}
                      {errors?.postalcode?.type === "number" && <span><i className="bi bi-exclamation-octagon-fill me-2"></i>Debe contener solo carácteres numéricos</span>}
                    </div>
                    <div className="pt-3 form-group col-10 col-lg-6">
                      <h5 className="ps-2">Provincia</h5>
                      <input type="text" className="form-control" maxLength="25" value={auxUser.province} placeholder="Provincia" name="province" {...register("province", {required: true})} onChange={(e) => setAuxUser({...auxUser, province: e.target.value}) } />
                      {errors?.province?.type === "required" && <span><i className="bi bi-exclamation-octagon-fill me-2"></i>Este campo es obligatorio</span>}
                    </div>
                    <div className="pt-3 form-group col-10 col-lg-6">
                      <h5 className="ps-2">Localidad / Barrio</h5>
                      <input type="text" className="form-control" value={auxUser.city} placeholder="Localidad / Barrio" name="city" {...register("city", {required: true})} onChange={(e) => setAuxUser({...auxUser, city: e.target.value}) } />
                      {errors?.city?.type === "required" && <span><i className="bi bi-exclamation-octagon-fill me-2"></i>Este campo es obligatorio</span>}
                    </div>
                    <div className="pt-3 form-group col-10 col-lg-6">
                      <h5 className="ps-2">Calle</h5>
                      <input type="text" className="form-control" value={auxUser.street} placeholder="Calle" name="street" {...register("street", {required: true})} onChange={(e) => setAuxUser({...auxUser, street: e.target.value}) } />
                      {errors?.street?.type === "required" && <span><i className="bi bi-exclamation-octagon-fill me-2"></i>Este campo es obligatorio</span>}
                    </div>
                    <div className="pt-3 form-group col-10 col-lg-6">
                      <h5 className="ps-2">Número</h5>
                      <input type="text" className="form-control" value={auxUser.number} placeholder="Número" name="number" {...register("number", {required: true})} onChange={(e) => setAuxUser({...auxUser, number: e.target.value}) } />
                      {errors?.number?.type === "required" && <span><i className="bi bi-exclamation-octagon-fill me-2"></i>Este campo es obligatorio</span>}
                    </div>
                    <div className="pt-3 form-group col-10 col-lg-6">
                      <h5 className="ps-2">Piso / Departamento</h5>
                      <input type="text" className="form-control" value={auxUser.apartment} placeholder="Piso / Departamento (Opcional)" name="apartment" {...register("apartment")} onChange={(e) => setAuxUser({...auxUser, apartment: e.target.value}) } />
                    </div>
                    <div className="pt-3 form-group col-10 col-lg-6">
                      <h5 className="ps-2">Teléfono de Contacto</h5>
                      <input type="text" className="form-control" value={auxUser.phonenumber} placeholder="Telefono de contacto (Opcional)" name="phonenumber" {...register("phonenumber",{required: true})} onChange={(e) => setAuxUser({...auxUser, phonenumber: e.target.value}) } />
                      {errors?.phonenumber?.type === "required" && <span><i className="bi bi-exclamation-octagon-fill me-2"></i>Este campo es obligatorio</span>}
                    </div>
                  </div>
                  <div className="mx-auto pt-3 form-group d-flex justify-content-end col-10 col-lg-12">
                    <div>
                      <input type="button" className="mt-2 me-2  btn btn-danger" value="Cancelar" onClick={ () => {setDisabled(true); setAuxUser(user)}} />
                      <input type="submit" className="mt-2 ms-2  btn btn-success" value="Enviar"/>
                    </div>
                  </div>
                </div>
              }
          </form>
        </div>
        :<h1>No hay usuario</h1>
      }
    </div>
  )
}

export default Profile