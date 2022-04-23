import React from "react";
import "./AddCource.css";
import { useForm } from "react-hook-form";

const AddCource = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
    console.log(data)
    const url = `http://localhost:5000/cource`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(resutl => {
      console.log(resutl);
    } )
  };
	return (
		<div className='addcource-container'>
			<h2>Add your cource here</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input placeholder="Cource image" {...register("image", { required: true })} />
				<input placeholder="Cource name" {...register("title", { required: true, maxLength: 20 })} />
				<textarea placeholder="Cource details" {...register("details")} />
				<input placeholder="Fee" type="number" {...register("fee")} />
				<input type="submit" value="Add Cource"/>
			</form>
		</div>
	);
};

export default AddCource;
