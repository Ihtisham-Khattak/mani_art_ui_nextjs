import Image from "next/image";

const Dedicated = () => {
  return (
    <div className="relative">
      <Image
        src="/images/dedicated/spiral.svg"
        height={272}
        width={686}
        alt="spiral-design"
        className="absolute left-0 hidden lg:block -z-10"
      />

      <div className="mx-auto max-w-7xl px-4 my-40 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 my-16">
          {/* COLUMN-1 */}
          <div>
            <Image
              src="/images/dedicated/IMG_20230518_215530_489.jpg"
              alt="man-icon"
              width={416}
              height={530}
              className="mx-auto md:mx-0 rounded-lg"
            />
          </div>

          {/* COLUMN-2 */}
          <div className="relative">
            <Image
              src="images/dedicated/comma.svg"
              alt="comma-image"
              width={200}
              height={106}
              className="absolute comma-pos hidden lg:block"
            />
            <h4 className="text-2xl lg:text-[44px] pt-4 font-bold sm:leading-tight mt-5 text-center lg:text-start">
              Luqman Asghar is a visual artists and create art based on human
              emotion and feelings.
            </h4>
            <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">
              He is a self thought artist and start learning at his young age.
              His artwork are mostly based on culture like,(female in
              traditional burqa, cultural dress etc) and he also explore
              different interest in various category, such as; Still life,
              Arabic calligraphy, sketching,line art) . His primary medium of
              work is oil paint but also use different medium ( Acrylic,
              charcoal).
            </p>
            <p className="text-3xl text-center font-semibold mt-12 lg:ml-32 sm:text-center lg:text-start">
              Mani Art Studio, CEO
              <hr className="w-[18rem]"  />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dedicated;
