import Image from "next/image";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "next/link";

const FeatureCard = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start gap-3 sm:gap-10 lg:w-[90%]">
      <Image
        src={imgSrc}
        width={70}
        height={70}
        alt="feature icon"
        className="mx-auto"
      />
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="leading-loose">{desc}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="relative bg-gray-100 py-20 lg:py-32">
      <div className="container mx-auto px-5 md:px-16">
        <div className="flex gap-10 items-center flex-col lg:flex-row">
          <div className="relative w-full lg:w-1/2">
            <Image
              src={"/videobanner.png"}
              width={500}
              height={500}
              alt="video banner"
              className="object-cover w-full rounded-lg"
            />
            <button className="w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Link href={"https://youtu.be/aVNa8Dka5MA"} target="_blank">
                <span className="playButton duration-700 w-full h-full bg-teal-500 rounded-full block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                <PlayArrowIcon className="w-16 h-16 md:w-24 md:h-24 text-white bg-[#ffffffb8] rounded-full" />
              </Link>
            </button>
          </div>
          <div className="flex flex-col gap-5 lg:w-1/2">
            <div className="flex flex-col gap-4">
              <span className="service-name text-center lg:text-left text-gray-600 uppercase tracking-wider">
                Discover Our Services
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-center lg:text-left text-gray-900">
                Connect with Innovative Startups
              </h2>
            </div>
            <FeatureCard
              imgSrc={"/features/3.svg"}
              title="Startup Opportunities"
              desc="Explore diverse investment opportunities from promising startups."
            />
            <FeatureCard
              imgSrc={"/features/2.svg"}
              title="Strategic Partnerships"
              desc="Forge strategic partnerships with innovative startups to accelerate growth."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
