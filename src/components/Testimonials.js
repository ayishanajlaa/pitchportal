import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";

const TestimonialCard = ({ star, title, content, imgSrc, name, username }) => {
  return (
    <div className="mx-2 flex flex-col gap-4 select-none cursor-pointer border border-gray-300 p-10 rounded-lg hover:shadow-xl transition-all">
      <div className="text-teal-600 flex items-center gap-1">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarIcon />
        {star && star}
      </div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="leading-loose">{content}</p>
      <div className="flex items-center gap-4 mt-5">
        <Image src={imgSrc} width={50} height={50} alt="testimonials" />
        <div>
          <h3 className="font-semibold">{name}</h3>
          <Link
            href={`https://example.com/${username}`}
            target="_blank"
            className="text-teal-600 font-[500]"
          >
            @{username}
          </Link>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5" id="testimonials">
      <div>
        <span className="service-name text-center">CLIENT TESTIMONIALS</span>
        <h2 className="title text-center">Discover Success Stories</h2>
      </div>
      <Carousel {...carouselParams}>
        <div>
          <TestimonialCard
            star={<StarHalfIcon />}
            title="Transformative Design & Innovation"
            content="Working with this team was a game-changer for our project. Their dedication and expertise helped us achieve our goals seamlessly."
            imgSrc="/testimonials/1.png"
            name="Jane Doe"
            username="jane_doe"
          />
        </div>
        <div>
          <TestimonialCard
            title="Efficient Collaboration & Support"
            content="The team provided efficient collaboration and support throughout our project, ensuring every milestone was met with precision."
            imgSrc="/testimonials/2.png"
            name="John Smith"
            username="john_smith"
          />
        </div>
        <div>
          <TestimonialCard
            star={<StarIcon />}
            title="Exceptional Quality & Timely Delivery"
            content="Their commitment to delivering exceptional quality and meeting deadlines exceeded our expectations. Highly recommended!"
            imgSrc="/testimonials/3.png"
            name="Evan Johnson"
            username="evan_johnson"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default TestimonialsSection;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};
