import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

interface datatype {
  heading: string;
  imgSrc: string;
  link: string;
}

const Aboutdata: datatype[] = [
  {
    heading: "Portrait Painting.",
    imgSrc: "/images/aboutus/imgOne.svg",
    link: "/components/Aboutus/Potrait",
  },
  {
    heading: "Calligraphy.",
    imgSrc: "/images/aboutus/imgTwo.svg",
    link: "/components/Aboutus/Calligraphy",
  },
  {
    heading: "Other Works.",
    imgSrc: "/images/aboutus/imgThree.svg",
    link: "/components/Aboutus/OtherWork",
  },
];

const Aboutus = () => {
  return (
    <div id="gallery-section">
      <div className="mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative">
        <Image
          src="/images/aboutus/dots.svg"
          width={100}
          height={100}
          alt="dots-image"
          className="absolute bottom-1 -left-20"
        />
        <h3 className="text-center text-blue text-lg tracking-widest">
          Gallery
        </h3>
        {/* Adding more cards change the lg:grid-col-2 to 3,4,5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32">
          {Aboutdata.map((item, i) => (
            <div
              key={i}
              className="hover:bg-navyblue bg-navyblue rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl"
            >
              <Image
                src={item.imgSrc}
                alt={item.imgSrc}
                width={100}
                height={100}
                className="mb-5"
              />
              <h2 className="text-3xl font-semibold  text-white mb-5">
                {item.heading}
              </h2>
              <Link
                href={item.link}
                target="_blank"
                className="text-lg font-semibold text-white hover-underline"
              >
                Click Here
                <ChevronRightIcon width={20} height={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
