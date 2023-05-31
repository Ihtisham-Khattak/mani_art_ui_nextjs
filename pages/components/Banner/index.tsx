const Banner = () => {
  return (
    <div className='mx-auto my-10 h-screen  sm:py-10 px-6 lg:px-8 bg-[url("/images/gallery/Banner.jpg")] bg-center bg-cover bg-no-repeat'>
      <div className="my-16">
        {/* COLUMN-1 */}

        <div className="mx-auto sm:mx-0">
          <div className="w-[50%] mx-auto bg-[#28312C] rounded-lg">
            <div className="py-4 flex justify-center items-center text-center lg:text-start ">
              {/* <button className="text-blue bg-lightblue opacity-100 hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black">
                ART Studio
              </button> */}
            </div>
            <div className="py-1 text-center lg:text-start">
              <h2 className="text-white font-bold text-3xl text-center">
                Mani Art Studio bring your <br /> ideas to life.
              </h2>
            </div>
            <div className="my-7 flex justify-center items-center text-center lg:text-start">
              <button className="text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue">
                Get Started
              </button>
            </div>
            <div className="h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
