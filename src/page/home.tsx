/* eslint-disable no-unused-vars */
import React, { FC, ChangeEvent, FormEvent, useState, SetStateAction  } from 'react';
import { Form } from '../components/form/form';


export function HomePage(){


    const [form, setForm] = useState({
        name:"",
        lastName:"",
        Birthdate:"",
        Gender:"",
        Email:"",
        Checkbox: Boolean
    });

    function handleSubmit(ev) {
        ev.preventDefault();
        console.log("Guardando", formData);
     
    function handleChange(ev) {
         const value =
            ev.target.type === "checkbox" ? ev.target.checked : ev.target.value;
            setFormData({ ...formData, [ev.target.name]: value });
        }
    




    const changeVisibility1 = (value: string) => {
        console.log('object');
        setForm(value);
    };

// changeVisibility1("df")

    return (

        <main>
        <h1>Challenge formulario</h1>
        <Form
            changeVisibility1={changeVisibility1}
        ></Form>
        </main>
        
    

    )
}