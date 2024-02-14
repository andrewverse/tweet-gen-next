import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faMoon, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <header className='w-full border-b border-b-gray-300 border-b-0.5'>
      <div className='md:max-w-7xl w-full mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Tweet Gen</h1>
        <div className='flex items-center'>
          {/* GitHub icon */}
          <a
            href='https://github.com'
            className=' hover:text-gray-300 mx-2 w-5'
          >
            <FontAwesomeIcon icon={faCat} />
          </a>

          {/* Moon icon */}
          <button className=' hover:text-gray-300 mx-2 w-5'>
            <FontAwesomeIcon icon={faMoon} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
