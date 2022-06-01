import React from "react"

export function Form1(){

   
   
   
    return(
        
        <>
         <input
          type="text"
          name="name"
          id="name"
          placeholder="Ingrea tu nombre"
          onChange={handleChange}
          value={formData.name}
          />

         <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Apellido"
          onChange={handleChange}
          value={formData.lastName}
           />
         <input
          type="date"
          name="birthday"
          id="birthday"
          onChange={handleChange}
          value={formData.birthday}
          />
         <div className="formulario__input radio">
          <label htmlFor="male">Male</label>
          <input
          type="radio"
          name="gender"
          id="male"
          onChange={handleChange}
          value=""
          />

         <label htmlFor="female">Female</label>
         <input
          type="radio"
          name="gender"
          id="female"
          onChange={handleChange}
          value="female"
          />
         <label htmlFor="other">Other</label>
         <input
          type="radio"
          name="gender"
          id="other"
          onChange={handleChange}
          value="other"
          />
         <label htmlFor="pntm">Prefer not to mention</label>
         <input
          type="radio"
          name="gender"
          id="pntm"
          onChange={handleChange}
          value="prefer not to mention"
          />
          </div>
          <input
          type="email"
          name="email"
          id="email"
          placeholder="pokemon@gmail.com"
          onChange={handleChange}
          value={formData.mail}
          />
          <label htmlFor="newsLetter">
          Desea recibir información de nuestra newsletter?
         </label>
         <input
          type="checkbox"
          name="newsLetter"
          id="newsLetter"
          onChange={handleChange}
          checked={formData.newsletter}
          />

         <button type="button">Siguiente</button>

        </>
      
    )
}