import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";
import image from "../img/loading.gif";

const InstructorDetail = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  const [inst, setInst] = useState([]);
  const getInstructor = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          let counter = 0;
          const sec1 = setInterval(() => {
            counter++;
            if (counter > 3) {
              clearInterval(sec1);
              setLoading(false);
              setError(true);
            }
          }, 1000);
          throw new Error("Something went wrong");
        }
        setLoading(false);
        return res.json();
      })

      .then((data) => setInst(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getInstructor();
  }, []);
  if (error) {
    return <NotFound />;
  }
  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={image} alt="loading" style={{ width: "75vw" }} />
      </div>
    );
  }
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
