import CardLogo from "../assets/images/card-logo.svg";

export default function Card() {
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
              <span className="text-2xl">0000 0000 0000 0000</span>
              <div className="flex justify-between items-end text-xs">
                <span>Jane Appleseed</span>
                <span>00/00</span>
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
            <span className="text-xs">000</span>
          </div>
        </div>
      </section>
    </>
  );
}
