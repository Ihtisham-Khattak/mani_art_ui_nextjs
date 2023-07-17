import Image from "next/image";
import Link from "next/link";

const footer = () => {
  return (
    <div className="bg-black -mt-40 sm:text-left" id="first-section">
      <div className="mx-auto max-w-2xl pt-8 pb-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 pl-10 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 Social Icons*/}

          <div className="col-span-6">
            <h3 className="text-white text-4xl font-semibold leading-9 mb-4 lg:mb-20">
              Mani Art Studio
            </h3>
            {/* Social Media */}
            <div className="flex gap-10">
              <div className="footer-icons ">
                <Link href="https://twitter.com/luqmanasghar0?t=-7V2sEpOR-o-dM5_YTzTPQ&s=09">
                  <Image
                    src={"/images/footer/twitter-2170.svg"}
                    alt="twitter"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
              <div className="footer-icons">
                <Link href="https://www.instagram.com/art.by.manii/?igshid=OTk0YzhjMDVlZA%3D%3D">
                  <Image
                    src={"/images/footer/instagram-logo-3289.svg"}
                    alt="instagram"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
              <div className="footer-icons">
                <Link href="https://web.whatsapp.com/">
                  <Image
                    src={"/images/footer/whatsapp-121.svg"}
                    alt="instagram"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* CLOUMN-2/3 */}
          {/* Menu */}
          <div className="group relative col-span-3">
            <p className="text-white text-xl font-extrabold mb-9">Menu</p>
            <ul>
              <li className="mb-5">
                <Link
                  href="/"
                  className="text-white text-lg font-normal mb-6 space-links"
                >
                  Home
                </Link>
              </li>
              <li className="mb-5">
                <Link
                  href="#aboutus-section"
                  className="text-white text-lg font-normal mb-6 space-links"
                >
                  About Us
                </Link>
              </li>
              <li className="mb-5">
                <Link
                  href="#testimonial-section"
                  className="text-white text-lg font-normal mb-6 space-links"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Category */}
          <div className="group relative col-span-3">
            <p className="text-white text-xl font-extrabold mb-9">Category</p>
            <ul>
              <li className="mb-5">
                <Link
                  href="/components/Aboutus/Potrait"
                  className="text-white text-lg font-normal mb-6 space-links"
                >
                  Potrait
                </Link>
              </li>
              <li className="mb-5">
                <Link
                  href="/components/Aboutus/Calligraphy"
                  className="text-white text-lg font-normal mb-6 space-links"
                >
                  Calligraphy
                </Link>
              </li>
              <li className="mb-5">
                <Link
                  href="/components/Aboutus/OtherWork"
                  className="text-white text-lg font-normal mb-6 space-links"
                >
                  Other Work
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* All Rights Reserved */}
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
          <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
            <div>
              <h3 className="text-center md:text-start pl-10 text-offwhite text-lg">
                @2023 - All Rights Reserved by{" "}
                <Link
                  href="https://ihtisham-khattak.netlify.app/"
                  target="_blank"
                >
                  Nova Forge
                </Link>
              </h3>
            </div>
            <div className="flex justify-center sm:justify-center md:justify-end">
              <Link href="/">
                <h3 className="text-offwhite pr-6">Privacy policy</h3>
              </Link>
              <Link href="/">
                <h3 className="text-offwhite pl-2 pr-10 border-solid border-l border-footer">
                  Terms & conditions
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default footer;
