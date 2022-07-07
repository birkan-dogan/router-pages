import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const InstructorDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [inst, setInst] = useState([]);
  const getInstructor = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setInst(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getInstructor();
  }, []);
  return (
    <div className="container text-center">
      <h3>{inst.name}</h3>
      <img
        src={`https://avatars.dicebear.com/v2/avataaars/${id}.svg`}
        alt=""
        className="w-50"
      />
      <h4>{inst.email}</h4>
      <h4>{inst.phone}</h4>
      <div>
        <button className="btn btn-success me-2" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="btn btn-warning" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default InstructorDetail;
