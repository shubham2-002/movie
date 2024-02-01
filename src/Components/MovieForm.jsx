import React, { useEffect, useState } from "react";

const MovieForm = ({showName,showForm}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    preferredDate: "",
  });

  const handelChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handelSumbmit = (e) => {
    e.preventDefault();
    alert('Ticket Booked Info Saved in Database')

    localStorage.setItem("userInfo", JSON.stringify(formData));

    // console.log(formData)
  };

  return showForm && (
    <div className={" ml-4" }>
      <form onSubmit={handelSumbmit} className="flex gap-2 flex-col ">
        <label>Movie Name</label>
        <input
          onChange={handelChange}
          name="name"
          className=" border-2 px-2 border-black form-input mt-1 block w-full "
          type="text"
          value={showName ||""}
  
        />
        <label>Email</label>
        <input
          onChange={handelChange}
          name="email"
          className="border-2 px-2 border-black form-input mt-1 block w-full"
          type="email"
          placeholder="ex@example.com"
        />
        <label>Phone Number</label>
        <input
          onChange={handelChange}
          name="phoneNumber"
          placeholder="+91 "
          className="border-2 px-2 border-black form-input mt-1 block w-full"
          type="tel"
        />
        <label>Preferred Date</label>
        <input
          onChange={handelChange}
          name="preferredDate"
          className="form-input mt-1 px-2 block border-2 border-black w-full"
          type="date"
        />
        <button className="text-center w-full bg-slate-800 p-2 rounded-md text-white" type="submit">Confirm Movie</button>
      </form>
    </div>
  );
};

export default MovieForm;
