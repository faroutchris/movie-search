import React, { useState, useEffect } from "react";
import loader from "./../../../assets/loader.svg";

const Loader = ({ children, isLoading, delayMs }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isLoading === true) {
      const interval = setInterval(() => {
        setShow(true);
      }, delayMs);

      return () => clearInterval(interval);
    } else {
      setShow(false);
    }
  }, [isLoading, delayMs]);

  return (
    <>
      {show && isLoading ? (
        <div className="loader">
          <img src={loader} alt="Loading" />
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Loader;
