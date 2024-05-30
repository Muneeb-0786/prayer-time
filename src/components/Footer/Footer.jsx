import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { PrayersContext } from "../../context/PrayersContext";

const Footer = () => {
  const { prayers, language , Hyears } = useContext(PrayersContext);
  return (
    <footer className="footer pb-3">
      <Container>
        {
          Hyears ? (
            <p className="text-white text-center my-2">
              {language === "ar"
                ? `جميع الحقوق محظفوظة لدى عمر 	مُنِيْبٌ ${
                  Hyears
                  }`
                : language === "en"
                ? `All copyright reserved Muneeb Islam ${
                  Hyears
                  }`
                : ""}
            </p>
          ) : (
            <p className="text-white text-center  my-2">
              {" "}
              {language === "ar"
                ? `جميع الحقوق محفوظة لدى عمر 	مُنِيْبٌ سعيد  ${new Date().getFullYear()}`
                : language === "en"
                ? `All copyright reserved Muneeb Islam ${new Date().getFullYear()}`
                : ""}{" "}
            </p>
          
        )}
      </Container>
    </footer>
  );
};

export default Footer;
