import React from 'react';

const ErrorMessage = ({ content }) => {
  if (content == '') {
    return <div></div>;
  }
  return (
    <div className='rounded-md border border-red-800 text-md text-red-800 bg-red-50 px-6 mt-3 py-4'>
      <div>{content}</div>
    </div>
  );
};

export default ErrorMessage;
