import { useState } from "react";
export default function CommentForm(){
    let [formData , setFormData] = useState({
        userName: "",
        remarks: "",
        rating: 5,
    });
     
    let handleInputChange = (event) =>{
        setFormData((currData) => {
            return{...currData, [event.target.name]: event.target.value};
        });
    };

    let handleSubmit = (event) => {
        console.log(formData);
              event.preventDefault();
              setFormData({
                userName: "",
                remarks: "",
                rating: 5,
              });
    };

    return(
        <div>
            <h4>Give a Comment!</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">UserName</label> &nbsp;&nbsp;
                <input id="username" placeholder="username" type="text" value={formData.userName} name="userName" onChange={handleInputChange}/>
                <br></br><br></br>
                <label htmlFor="Remarks">Remarks</label> &nbsp;&nbsp;
                <textarea id="Remarks" placeholder="add few remarks" value={formData.remarks} name="remarks" onChange={handleInputChange}>Remarks</textarea>
                <br></br><br></br>
                <label htmlFor="rating">Rating 😊</label> &nbsp;&nbsp;
                <input id="rating" placeholder="rating" type="number" min={1} max={5} value={formData.rating} name="rating" onChange={handleInputChange}/>
                <br></br><br></br>
                <button>Submit</button>
            </form>
        </div>
    );
}