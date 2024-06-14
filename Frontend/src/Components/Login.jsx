import { useState, useEffect } from "react";

const Login = () => {
  const [cred, setCred] = useState({ username: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const form = e.target;
    const form_data = new FormData(form);
    const n = form_data.get("name");
    const p = form_data.get("password");
    setCred({ username: n, password: p });
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (isSubmitting) {
      console.log("credentials updated");
      console.log(cred);
      fetch("http://127.0.0.1:8000/hello/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: cred.username, password: cred.password }),
      })
        .then(() => {
          console.log("submitted to API");
          setIsSubmitting(false);
        })
        .catch(() => {
          console.log("network error");
          setIsSubmitting(false);
        });
    }
  }, [cred, isSubmitting]);

  return (
    <>
      <form onSubmit={submit}>
        <label htmlFor="name">Enter name</label>
        <input type="text" name="name" id="name" />
        <br />
        <label htmlFor="password">Enter password</label>
        <input type="password" name="password" id="password" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
