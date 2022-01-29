import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";


export default function Admin( {setIsAuth} ) {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");
    const [isDisabled, setIsDisabled] = useState(false)

    const submit = (e) => {
        e.preventDefault();
        setIsDisabled(true)
        fetch("https://pizza-app-ulan.herokuapp.com/admin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                login: user,
                password: password
            })
        })
            .finally(() => {
                setIsDisabled(false)  
            })
            .then((res) => res.json())
            .then((data) => {
                if(data?.token) {
                    setIsAuth(data)
                } else {
                    setError(data.msg);
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return <div className="container">
        <h2>Authorization Admin</h2>
        <form onSubmit={submit}>
            <br />
            <TextField value={user} onChange={(e) => setUser(e.target.value)}  id="outlined-basic" label="User" variant="outlined" />
            <br />
            <br />
            <TextField value={password} onChange={(e) => setPassword(e.target.value)} id="outlined-basic" label="Password" variant="outlined" type="password" />
            <br />
            <br />
            <Button disabled={isDisabled} type="submit" variant="outlined" size="large">
                Login
            </Button>
            <div className="error">{ error }</div>
        </form>
    </div>;
}
