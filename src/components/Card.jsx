import { useEffect, useState } from "react";
import CardLogo from "../assets/images/card-logo.svg";
import useStoredFormData from "../hooks/useSavedFormData";
import { getImageURL } from "../utils/getImageURL";
import { getFormatCardNumber } from "../utils/getFormatCardNumber";

export default function Card(props) {
  const { formData } = props;

  const initialCardData = {
    fullName: "Jane Appleseed",
    number: "0000000000000000",
    expMonth: "00",
    expYear: "00",
    cvc: "000",
  };

  const [cardData, setCardData] = useState({ ...initialCardData });

  useStoredFormData((parsedFormData) => {
    setCardData(parsedFormData);
  });

  useEffect(() => {
    Object.keys(formData).forEach((key) => {
      setCardData((prev) => ({
        ...prev,
        [key]: formData[key] || initialCardData[key],
      }));
    });
  }, [formData]);

  return (
    <>
      <section className="flex flex-col-reverse gap-0 justify-between self-start uppercase text-white tracking-widest md:flex-col md:gap-8">
        <div className="card z-10 -mt-16 md:mt-0">
          <img
            className="w-full"
            src={getImageURL("bg-card-front.png")}
            alt="Front card"
          />
          <div className="absolute inset-0 p-4 flex flex-col justify-between md:p-6">
            <img className="w-12 md:w-16" src={CardLogo} alt="Card logo" />
            <div className="flex flex-col gap-4 md:gap-6">
              <span className="text-base md:text-2xl">
                {getFormatCardNumber(cardData.number)}
              </span>
              <div className="flex justify-between items-end text-xs">
                <span>{cardData.fullName}</span>
                <span>
                  {cardData.expMonth}/{cardData.expYear}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card self-end">
          <img
            className="w-full"
            src={getImageURL("bg-card-back.png")}
            alt="Back card"
          />
          <div className="absolute top-[3.75rem] right-8 h-fit md:top-20 md:right-10 lg:top-[6.5rem] lg:right-12">
            <span className="text-xs">{cardData.cvc}</span>
          </div>
        </div>
      </section>
    </>
  );
}
