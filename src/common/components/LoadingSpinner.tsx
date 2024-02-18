import { FaSpinner } from "react-icons/fa";

const LoadingSpinner = () => {
    return (  
    <div className='flex items-center justify-center text-2xl'>
          <FaSpinner className='animate-spin mr-2' />
          <span>Loading...</span>
        </div>
    );
}
 
export default LoadingSpinner;