// @flow strict
import { useGlobalContext } from "../GlobalContext";
function Home() {
    const {username}=useGlobalContext()


    return (
        <div>
            <p className='text-base text-center'>{username}</p>
        </div>
    );
};

export default Home;