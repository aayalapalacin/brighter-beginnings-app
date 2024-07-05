import React from "react";
import "../../styles/footer.css";

const Footer = () => {
  const navigationLink: string =
    "https://www.google.com/maps/place/Brighter+Beginnings+Child+Care/@42.2325078,-72.5689313,16z/data=!3m1!4b1!4m6!3m5!1s0x89e6db75dd2dd64d:0xecbc9c8277fd7644!8m2!3d42.2325078!4d-72.5663564!16s%2Fg%2F1tgw619r?entry=ttu";

  return (
    <div className="footer-container mb-lg-0 mb-md-0 mb-3  w-100 pt-2">
      <div className="footer-content d-flex text-center container">
        <div className="footer-phone-container d-md-flex d-lg-flex d-block border-3 border-end pe-md-3 pe-lg-3 pe-2">
          <span className="footer-phone fa fa-phone my-auto p-2 " />
          <a className="footer-phone-tag footer-descriptions " href="tel:(413)5325303">
            (413) 532-5303
          </a>
        </div>
        <div className="footer-address-container d-md-flex d-lg-flex d-block  border-3 border-end px-md-3 px-lg-3 px-2">
          <span className="footer-address fa fa-location my-auto p-2 " />
          <a
            className="footer-address-tag footer-descriptions "
            target="_blank"
            href={navigationLink}
            rel="noopener noreferrer">
            411 Granby Rd, South Hadley, MA 01075
          </a>
        </div>
        <div className="footer-email-container d-md-flex d-lg-flex d-block px-md-3 px-lg-3 px-2">
          <span className="footer-email fa fa-envelope my-auto p-2 " />
          <a className="footer-email-tag footer-descriptions" href="mailto:Lilbbcc2@aol.com">
            Lilbbcc2@aol.com
          </a>
        </div>
      </div>
      {/* <div className="footer-copyright-container col-12 text-center pt-4">
        <p className="footer-copyright" >Brighter Beginnings LLC, Inc.</p>
      </div> */}
    </div>
  );
};

export default Footer;
