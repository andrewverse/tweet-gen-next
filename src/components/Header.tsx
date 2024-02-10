import React from "react";

const Header: React.FC = () => {
  return (
    <header className='py-16'>
      <h1 className='text-6xl font-bold text-center max-w-4xl mx-auto leading-normal'>
        Generate your next Twitter/X post using our custom model
      </h1>
      <p className='text-center mt-4 text-sm'>
        Just select an article and we will summerize it for you.
      </p>
    </header>
  );
};

export default Header;
