import React, { memo } from 'react';

const Header = () => {
  console.log('Usou React memo');
  return <div>Header</div>;
};

export default memo(Header);
