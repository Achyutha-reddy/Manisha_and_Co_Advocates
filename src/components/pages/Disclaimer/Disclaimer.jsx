import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Disclaimer.css";

const Disclaimer = () => {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  const handleAgree = () => {
    setShowModal(true); // Close the modal
    navigate("/home"); // Navigate to the Home page
  };

  return (
    showModal && (
      <div className="disclaimer-overlay">
        <div className="disclaimer-modal">
          <h2>We Respect Your Privacy</h2>
          <p>
            The current rules of the Bar Council of India restrict/prohibit law firms from advertising and soliciting work
            through communication in the public domain. This website has been designed solely for the purposes of dissemination
            of basic information about us, which is made available on the specific request of the visitor/user.
          </p>
          <ul>
            <li>The contents of this website do not amount to advertising or solicitation.</li>
            <li>
              The information provided on the website is meant only for his/her understanding about our activities and who we
              are, on their own volition.
            </li>
            <li>
              The contents of this website do not constitute, and shall not be construed as, legal advice or a substitute for
              legal advice.
            </li>
            <li>
              The use of this website is completely at the user’s own volition and shall not create or amount to an
              attorney-client relationship.
            </li>
            <li>
              We are not liable for the consequence of any action or decision taken by the visitor by relying on the
              contents of this website or of any external links on this website.
            </li>
            <li>
              We does not assume any liability for the interpretation or use of the information provided on this
              website and does not offer any warranty, either express or implied.
            </li>
            <li>
              The contents of this website are the property of Us, and the visitor is not authorized to use any part
              thereof, with or without adaptation, without the express prior written consent of Us.
            </li>
            <li>
              We uses cookies on this website to improve user experience. By continuing to use this website without
              changing your privacy settings, you agree to the use of cookies.
            </li>
          </ul>
          <button className="agree-button" onClick={handleAgree}>
            AGREE & ENTER
          </button>
        </div>
      </div>
    )
  );
};

export default Disclaimer;
