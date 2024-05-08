import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmailOrPhone = (e) => setEmailOrPhone(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);


function LoginPage() {
  return (
    <div>
      <h1>Welcorm</h1>
      <h4>Username</h4>
      <input type="text" onChange={}/>
      <h4>Password</h4>
      <input type="password" onChange={}/>
      <br />
      <a className="link" href="/HomePage">
        LOG IN
      </a>
    </div>
  );
}

export default LoginPage;
