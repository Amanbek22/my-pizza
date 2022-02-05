import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";


export default function Admin() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);

    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        setIsDisabled(true);
        axios.post("https://pizza-app-ulan.herokuapp.com/admin", {
            login: user,
            password: password
        })
            .finally(() => {
                setIsDisabled(false)
            })
            .then((res) => {
                console.log(res);
                if (res.data?.token) {
                    // setIsAuth(res.data)
                    dispatch({ 
                        type: "success authorization",
                        payload: res.data
                     })
                } else {
                    setError(res.data.msg);
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
            <TextField value={user} onChange={(e) => setUser(e.target.value)} id="outlined-basic" label="User" variant="outlined" />
            <br />
            <br />
            <TextField value={password} onChange={(e) => setPassword(e.target.value)} id="outlined-basic" label="Password" variant="outlined" type="password" />
            <br />
            <br />
            <Button disabled={isDisabled} type="submit" variant="outlined" size="large">
                Login
            </Button>
            <div className="error">{error}</div>
        </form>
    </div>;
}
