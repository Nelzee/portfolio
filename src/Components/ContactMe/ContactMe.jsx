import React, { useRef } from "react";
import "./contactMe.css";

const ContactMe = () => {
  const hello = useRef();

  return (
    <div ref={hello} id="contact_me">
      ContactMe
    </div>
  );
};

export default ContactMe;
