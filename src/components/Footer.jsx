import React from "react";


function Footer()
{
    var now = new Date();
    var currentYear = now.getFullYear();


    return (
      <footer>
        <p>Copyright ⓒ {currentYear}</p>
      </footer>
    );
}

export default Footer;