import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
  heading: string;
  imgSrc: string;
}

const postData: DataType[] = [
  {
    heading: "YOUNG HEART AT OLD AGE.",
    imgSrc: "/images/featured/Gallery19.jpeg",
  },
  {
    heading: "FAISAL MOSQUE.",
    imgSrc: "/images/featured/Gallery20.jpeg",
  },
  {
    heading: "EROTOMANIA.",
    imgSrc: "/images/featured/Gallery21.jpeg",
  },
  {
    heading: "Surah Al-Nas.",
    imgSrc: "/images/featured/Gallery22.jpeg",
  },
  // {
  //   heading: "Loh-e-Quran.",
  //   imgSrc: "/images/featured/Gallery23.jpeg",
  // },
  {
    heading: "Imran Khan.",
    imgSrc: "/images/featured/Gallery24.jpeg",
  },
];

// CAROUSEL SETTINGS
// Right Side Icon
function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.3)",
        padding: "30px",
        borderRadius: "20px",
        gap: "10px",
      }}
      onClick={onClick}
    />
  );
}

// Left Side Icon
function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.3)",
        padding: "30px",
        borderRadius: "20px",
      }}
      onClick={onClick}
    />
  );
}

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      centerMode: true,
      slidesToScroll: 2,
      arrows: true,
      autoplay: false,
      speed: 500,
      nextArrow: (
        <SampleNextArrow
          className={undefined}
          style={undefined}
          onClick={undefined}
        />
      ),
      prevArrow: (
        <SamplePrevArrow
          className={undefined}
          style={undefined}
          onClick={undefined}
        />
      ),
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
      ],
    };

    return (
      <div className="bg-bgblue py-20 mb-[40px] marginFeature bg-featured">
        <div className="mx-auto max-w-7xl sm:py-4 lg:px-8 ">
          <div className="text-center pt-48 pb-10 md:pt-96">
            <h3 className="text-4xl sm:text-6xl font-bold text-white my-2">
              Featured works.
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-50 lg:mr-48 my-2">
              Featured works.
            </h3>
            <h3 className="text-4xl sm:text-6xl font-bold text-white text-opacity-25 lg:-mr-48 my-2">
              Featured works.
            </h3>
          </div>

          <Slider {...settings}>
            {postData.map((items, i) => (
              <div key={i}>
                <div className="bg-transparent flex flex-col text-center m-3 pb-12 my-10 rounded-3xl ">
                  <Image
                    src={items.imgSrc}
                    alt="gaby"
                    width={300}
                    height={100}
                    className="rounded-2xl w-80 h-80"
                  />
                  <div className="w-345">
                    <h3 className="sm:text-2xl font-bold sm:pt-6  sm:text-start mt-10 text-white">
                      {items.heading}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
