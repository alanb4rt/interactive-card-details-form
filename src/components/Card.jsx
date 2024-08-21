import { useEffect, useState } from "react";
import CardLogo from "../assets/images/card-logo.svg";

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
      <section className="flex flex-col gap-8 justify-between uppercase text-white tracking-[0.2em]">
        <div className="relative w-3/4">
          <img
            className="w-full"
            src="./src/assets/images/bg-card-front.png"
            alt="Front card"
          />
          <div className="absolute inset-0 px-8 py-6 flex flex-col justify-between">
            <img className="w-16" src={CardLogo} alt="Card logo" />
            <div className="flex flex-col gap-4">
              <span className="text-2xl">{cardData.number}</span>
              <div className="flex justify-between items-end text-xs">
                <span>{cardData.fullName}</span>
                <span>
                  {cardData.expMonth}/{cardData.expYear}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-3/4 self-end">
          <img
            className="w-full"
            src="./src/assets/images/bg-card-back.png"
            alt="Back card"
          />
          <div className="absolute inset-y-0 bottom-2 right-0 h-fit px-16 my-auto">
            <span className="text-xs">{cardData.cvc}</span>
          </div>
        </div>
      </section>
    </>
  );
}
