const Banner = () => {
  return (
    <div className='mx-auto my-10 h-screen  sm:py-10 px-6 lg:px-8 bg-[url("/images/gallery/Banner.jpg")] bg-center bg-cover bg-no-repeat'>
      <div className="my-16">
        {/* COLUMN-1 */}

        <div className="mx-auto sm:mx-0">
          <div className="w-[50%] h-36 mx-auto bg-[#28312C] rounded-lg">
            <div className="py-4 text-center translate-y-5 lg:text-start">
              <h2 className="text-white font-bold text-3xl text-center">
                Mani Art Studio bring your <br /> ideas to life.
              </h2>
            </div>
            <div className="h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
