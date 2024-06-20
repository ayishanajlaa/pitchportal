import { useState } from "react";

const NewsletterSignup = () => {
  const [btnText, setBtnText] = useState("Subscribe");

  const handleSubscribe = () => {
    setBtnText("Submitting...");
    // Add logic for subscribing here (e.g., API call, form submission)
  };

  return (
    <section className="container mx-auto px-5 md:px-16">
      <div className="bg-teal-600 rounded-lg text-white py-16 sm:py-24">
        <div className="flex flex-col items-center gap-4 sm:gap-6 w-[90%] md:w-4/5 lg:w-1/2 text-center mx-auto">
          <h2 className="text-2xl sm:text-4xl font-semibold">
            Subscribe to Our Newsletter
          </h2>
          <p className="leading-loose font-[500]">
            Stay updated with the latest news and insights.
          </p>
          <div className="relative w-full">
            <input
              type="email"
              placeholder="Enter your email address"
              className="rounded-full bg-white px-3 py-4 text-center sm:text-left sm:p-6 border-none outline-none w-full font-[500] text-black"
            />
            <button
              onClick={handleSubscribe}
              className="sm:w-fit w-full mt-2 sm:mt-0 capitalize sm:absolute sm:top-2 md:top-[.4rem] sm:right-2 md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-4 px-7 text-white bg-teal-500 sm:bg-teal-600 hover:border-teal-600 hover:bg-teal-700 sm:hover:bg-teal-600 hover:shadow-2xl hover:shadow-teal-600 rounded-full"
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
