import React from "react";
import Img from "../../assets/bg-1.jpg";

import Generator from "../Generators/Generator";
const Example = () => {
  const data = {
    groomName: "ישראל",
    brideName: "ישראלה",
    greetingTime: "20:00",
    weddingTime: "20:45",
    eventDate: "23/06/20",
    imageSrc: Img,
    hallAddress: "המלך חסן 3 , קריית עקרון",
    groomP: "חנה וחיים",
    brideP: "שולה ושוקי",
    hallName: "אלגריה"
  };

  return <Generator example={true} data={data} />;
};

export default Example;
