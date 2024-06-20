import Image from "next/image";

const CoreFeaturesSection = () => {
  return (
    <section className="container mx-auto px-4 md:px-16 flex flex-col lg:flex-row items-center lg:gap-20 gap-14">
      <div className="flex flex-col gap-2 flex-1">
        <span className="text-teal-600 uppercase block font-semibold tracking-widest">
          KEY FEATURES
        </span>
        <h2 className="capitalize text-3xl md:text-4xl xl:text-5xl font-bold my-3">
          Enhance Your Pitch with Smart Features Anytime, Anywhere
        </h2>
        <p className="text-lg leading-loose">
          Deliver impactful presentations and impress stakeholders with our
          comprehensive design system and guidelines.
        </p>
        <button className="mt-5 w-fit md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-teal-600 hover:border-teal-600 hover:bg-teal-600 hover:shadow-teal-600 hover:shadow-2xl rounded-full">
          Explore Now
        </button>
      </div>

      <div className="flex-1 relative w-full">
        <div className="md:before:w-full md:before:h-full md:before:absolute md:before:-bottom-24 lg:before:-bottom-20 xl:before:-right-5 lg:before:-right-12 md:before:-right-16 md:before:bg-right-bottom md:before:bg-contain md:before:bg-no-repeat before:-z-50 before:bg-none md:before:bg-[url('/videobg.png')]">
          <Image
            src={"https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmclMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D"}
            width={300}
            height={300}
            alt="Core Features"
            className="object-cover w-full md:w-[90%] xl:w-4/5"
          />
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesSection;
