const Banner = () => {
  return (
    <div className='mx-auto h-screen sm:py-10 px-6 lg:px-8 bg-[url("/images/gallery/Gallery28.jpeg")] bg-center bg-cover bg-no-repeat'>
      <div className="">
        {/* COLUMN-1 */}

        <div className="mx-auto sm:mx-0 flex justify-center items-center">
          <div className="w-full sm:w-1/2 h-36 mx-auto sm:mx-auto flex items-center justify-center bg-[#28312C] rounded-lg">
            <div className="py-4 text-center sm:text-left">
              <h2 className="text-white text-center font-bold text-2xl sm:text-3xl">
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
