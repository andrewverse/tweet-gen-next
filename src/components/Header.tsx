import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faMoon, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className='bg-neutral-950 text-white border-b border-b-gray-500 border-b-0.5'>
      <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Tweet Gen</h1>
        <div className='flex items-center'>
          {/* GitHub icon */}
          <a
            href='https://github.com'
            className='text-white hover:text-gray-300 mx-2 w-5'
          >
            <FontAwesomeIcon icon={faCat} />
          </a>

          {/* 'X' icon */}
          <a className='text-white hover:text-gray-300 mx-2 w-5'>
            <FontAwesomeIcon icon={faTimes} />
          </a>

          {/* Moon icon */}
          <button className='text-white hover:text-gray-300 mx-2 w-5'>
            <FontAwesomeIcon icon={faMoon} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
