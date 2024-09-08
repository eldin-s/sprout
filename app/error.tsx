"use client";

const Error = ({ error }) => {
  return (
    <div className="w-full min-h-full flex items-center justify-center flex-col">
      <h1>{error.message}</h1>
      <p>Try again</p>
    </div>
  );
};

export default Error;
