// @flow strict
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className='flex flex-col h-[100vh] justify-center items-center'>
            <i className='ri-alert-line ri-4x'></i>
            <p className='text-xl'>Oops!! Currently this page is not available</p>
            <Link to="/" className='mt-[20px] rounded-[30px] py-2 px-4 bg-black text-white'>Home</Link>
        </div>
    );
};

export default NotFound;