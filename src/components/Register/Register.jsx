import "./Register.css";
import React from 'react';



const Register = () =>{
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Authenticate the user
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesion</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input type="submit" value="INICIAR SESION" />
      </form>
    </div>
  );
};


 /* return (
    <>
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={'holi'}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
   </>
  );
}
*/
//export default Register;
export default Register;