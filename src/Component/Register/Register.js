import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>
                <h2>Create Account</h2><form onSubmit="">
                    <input type="text" name="" placeholder="your email"/>
                    <br />
                    <input type="password" placeholder="your password" />
                    <br />
                    <input type="password" placeholder="Re-enter password" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>Already have an Account?<Link to="/login">login</Link></p>
            </div>
        </div>
    );
};

export default Register;