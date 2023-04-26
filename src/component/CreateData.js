import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateData = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const navigate = useNavigate();

    const formSubmitHandler = (event) =>{
        event.preventDefault();
        console.log(name,email);
        axios.post("http://localhost:8084/create",{name:name,email:email}).then(res=>{navigate("/");})
        .catch(err=>{console.log(err)});
        
    }

    return(
        <div className="vh-100 bg-primary d-flex justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={formSubmitHandler}>
                    <h2>Add Student</h2>
                    <div className="mb-3 mt-3">
                        <label>Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control text-center" onChange={e=>setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" className="form-control text-center" onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
            </div>
            
    );
}

export default CreateData;