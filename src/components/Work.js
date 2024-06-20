import Image from "next/image";

const StepCard = ({ num, title, description }) => {
  return (
    <div className="w-[90%] sm:w-4/5 mx-auto md:mx-0 md:w-full flex flex-col md:gap-5 gap-3 text-center md:text-left">
      <span className="md:mx-0 mx-auto text-3xl w-fit font-bold text-blue-800 bg-white rounded-full py-4 px-4">
        {num}
      </span>
      <h2 className="text-xl font-semibold leading-relaxed">{title}</h2>
      <p className="leading-loose">{description}</p>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="w-full bg-teal-500 text-white bg-[url('/work/workbg.png')] bg-cover bg-no-repeat bg-center">
      <div className="flex flex-col gap-10 lg:gap-16 container mx-auto md:px-16 px-5 py-12 sm:py-20 md:py-36">
        <div>
          <span className="uppercase block font-semibold text-sm tracking-widest text-center text-teal-200">
            HOW IT WORKS
          </span>
          <h2 className="text-2xl sm:text-4xl font-semibold my-3 text-center ">
            Let&apos;s see how PitchPortal works
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-5">
          <div className="relative">
            <StepCard
              num="01"
              title="Register Your Startup"
              description="Create an account and register your startup to get started."
            />
            <Image
              src={"/work/arrow.svg"}
              width={210}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.5rem] xl:block"
            />
          </div>

          <div className="relative">
            <StepCard
              num="02"
              title="Submit Your Pitch"
              description="Submit a detailed pitch to showcase your startup's potential."
            />
            <Image
              src={"/work/arrow.svg"}
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-7 left-[4.8rem] xl:block rotate"
            />
          </div>
          <div className="relative">
            <StepCard
              num="03"
              title="Connect with Investors"
              description="Get matched with investors interested in your industry."
            />
            <Image
              src={"/work/arrow.svg"}
              width={205}
              height={300}
              alt="arrow"
              className="hidden absolute top-2 left-[4.7rem] xl:block"
            />
          </div>
          <StepCard
            num="04"
            title="Secure Funding"
            description="Negotiate terms and secure the funding you need to grow."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
