import { useContext } from "react/cjs/react.development"
import { AuthContext } from "../../Context/AuthProvider"

const UseAuth = () =>{
    return useContext(AuthContext);
}

export default UseAuth;