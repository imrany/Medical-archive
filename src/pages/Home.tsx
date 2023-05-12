// @flow strict
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";

function Home() {
    const {name,path}=useContext(GlobalContext)
    return (
        <div>
            <p className='text-base text-center'>{name}</p>
            <Link to={path}>Front</Link>
        </div>
    );
};

export default Home;