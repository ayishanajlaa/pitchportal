import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const TeamMember = ({ imgSrc, name, title }) => {
  return (
    <div className="relative flex flex-col gap-4 md:hover:shadow-lg rounded-xl md:py-10 team-card md:cursor-pointer">
      <div className="flex justify-center">
        <Image
          src={imgSrc}
          width={130}
          height={130}
          alt="team member"
          className="drop-shadow-2xl w-20 sm:w-32 rounded-full border-2 border-teal-500 mx-auto"
        />
      </div>
      <div className="flex flex-col items-center mt-4">
        <h2 className="text-base sm:text-xl font-semibold text-center">{name}</h2>
        <p className="text-center sm:text-base text-sm">{title}</p>
        <div className="flex gap-3 mt-3">
          <Link target="_blank" href="#">
            <FacebookIcon className="text-xl hover:text-teal-600 cursor-pointer md:hover:text-gray-500" />
          </Link>
          <Link target="_blank" href="#">
            <GitHubIcon className="text-xl hover:text-teal-600 cursor-pointer md:hover:text-gray-500" />
          </Link>
          <Link target="_blank" href="#">
            <LinkedInIcon className="text-xl hover:text-teal-600 cursor-pointer md:hover:text-gray-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <section className="container mx-auto px-5 md:px-16 lg:px-24">
      <span className="service-name text-center">OUR TEAM</span>
      <h2 className="title text-center md:w-1/2 mx-auto">
        Meet our talented team
      </h2>

      <div className="mx-auto grid grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-8 mt-16">
        <TeamMember
          imgSrc={"/team/1.png"}
          name="John Doe"
          title="CEO and Founder"
        />
        <TeamMember imgSrc={"/team/2.png"} name="Jane Smith" title="Founder" />
        <TeamMember imgSrc={"/team/3.png"} name="Alex Johnson" title="Web Designer" />
        <TeamMember imgSrc={"/team/4.png"} name="Emily Brown" title="Web Developer" />
        <TeamMember imgSrc={"/team/5.png"} name="Michael Clark" title="Marketing Lead" />
        <TeamMember imgSrc={"/team/6.png"} name="Sarah Wilson" title="Project Manager" />
      </div>
    </section>
  );
};

export default TeamSection;
