import React from "react";
export default function Footer() {
  return (
    <footer >
      <p className='footer'>Copyright ©{new Date().getFullYear()}</p>
    </footer>
  );
}