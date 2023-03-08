import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
const API_URL = 'http://localhost:3001/api/user'

const Protected = ({ Component }) => {
  let user = localStorage.getItem("user");
  const [varified, setVerified] = useState(false);
  const verify = async () => {
    await axios
      .post(`${API_URL}/check/${user}`)
      .then((res) => {
        if (res.status === 200) {
          setVerified(true);
        }
        if (res.data === "token expired") {
          localStorage.removeItem("user");
          setVerified(false);
        }
      })
      .catch((error) => {
        localStorage.removeItem("user");
        window.location.replace("/signin");
      });
  };

  useEffect(() => {
    setInterval(() => {
      verify();
    }, 1000);
  }, []);

  return !user ? (
    <>
      <Loader message="Please Wait..." />
      {window.location.replace("/signin")}
    </>
  ) : varified ? (
    <Component />
  ) : (
    <>
      <Loader message="Please Wait..." />
    </>
  );
};

export default Protected;
