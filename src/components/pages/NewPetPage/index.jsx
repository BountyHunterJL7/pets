import {useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";

import "./styles.css";
import {useState} from "react";

export const NewPetPage = () => {

    const {register, handleSubmit} = useForm();
    const history = useHistory();

    const submitPet = async (formVals) => {
        const formattedData = {
            field: {
                id: {
                    stringVale: formVals.id
                },
                breed: {
                    stringValue: formVals.breed
                },
                age: {
                    stringValue: formVals.age
                },
                name: {
                    stringValue: formVals.name
                },
                petType: {
                    stringValue: formVals.petType
                },
                image: {
                    stringValue: formVals.image
                },
                isAdopted: {
                    booleanValue: false
                },
            }
        }
        try {
            const response = await fetch('https://firestore.googleapis.com/v1/projects/pet-store-af746/databases/(default)/documents/pets/',
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(formattedData)
            })
            history.push("/");
        } catch (error) {
            console.log("error", error);
        }
    };

    

    return (
        <div className="pets-page">
            <form className="form-layout" onSubmit={handleSubmit(submitPet)}>
                <h2>Submit a new pet: </h2>
                <br></br>

                <label htmlForm="petType"> Pet Type </label>
                <input 
                {...register("petType")}
                name="petType"
                required/>
                <label htmlFor="name"> Name </label>
                <input {...register("name")} name="name" required type="text"/>
                <label htmlFor="breed"> Breed </label>
                <input
                {...register("breed")}
                name="breed"
                required
                />
                <label htmlFor="image"> Image URL </label>
                <input
                {...register("image")}
                name="image"
                required
                />
                <label htmlFor="age"> Age </label>
                <input
                {...register("age")}
                name="image"
                required
                />
                <label htmlFor="id"> Unique ID </label>
                <input
                {...register("id")}
                name="id"
                required
                />
                <input type="submit" value="Submit Pet" />
                <br></br>
            </form>
        </div>
    );
};