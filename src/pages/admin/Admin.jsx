import { useHistory } from "react-router-dom";


export default function Admin() {
    const history = useHistory()

    const submit = (e) => {
        e.preventDefault();
        // TODO: remove after authorize logic
        history.push("/dashboard")
    }
    return <div className="container">
        <h2>Authorization Admin</h2>
        <form onSubmit={submit}>
            <input type="text" placeholder="Login" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
        </form>
    </div>;
}
