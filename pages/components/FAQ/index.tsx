import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

interface datatype {
  question: string;
  answer: string;
}

const faqsData: datatype[] = [
  {
    question: "I am interested in an artpiece. How do I make an inquiry?",
    answer:
      "You can reach out through Instagram or Email or even through the contact form here stating the title of the artwork you are interested in. Reaching out through instagram is preferred.",
  },
  {
    question: "Method of Payment?",
    answer:
      "Payments are accepted through bank transfer. Once you have decided on buying an artpeice, an invoice will be sent over with bank details included. Items will be shipped once payment has been recieved. People transferring money from overseas should kindly provide a reason when transferring (i.e. online purchase/ purchase of artwork etc.) as per bank requirements.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes.",
  },
  {
    question: "Do you take commissions?",
    answer:
      "I do take commissions. You can reach out to me and we can discuss what sort of artwork you are interested in. However, I take commissions that I find interesting and within the themes already present in my works. So no portraiture or landscapes etc. I also don't do sizes larger than 3x2 feet at the moment. I take a 20% advance on the commission and the rest of the payment after the commission is finished.",
  },
  {
    question: "Do you provide framing?",
    answer:
      "Yes, I provide free framing (of canvas paintings) within Pakistan. I do not provide crate shipping internationally so framing is not provided for international shipments.",
  },
  {
    question: "Does your artwork come with a Certificate of Authenticity?",
    answer: "Yes, a signed COA is provided with the artwork.",
  },
  {
    question: "Packaging and Shipping Policy?",
    answer:
      "Shipping charges applly and will be calculated based on your city/country of residence. Artworks can be shipped in a tube, box or crate depending on the location and/or the medium. All options are available for shipping within Pakistan. For International shipments, packaging wiill be done in a tube or box. Once payment has been made, artworks will be prepared for shipping. If the artwork is recently completed, the packaging process might be delayed to allow the artwork to dry to touch. Packaging can also take time depending on the type of packaging required. For example for crating an artwork, a crate will have to be custom built. For tube shipping, a certain drying time is required before a painting can be rolled. Once artwork is packaged and handed over to the courier, the collector will be informed of the tracking number and approximate delivery date.",
  },
  {
    question: "Return / Exchange Policy?",
    answer:
      "Artworks (excluding commissions) can be returned till 7 days after receiving the artworks, no questions asked (though feedback would be appreciated). The price of the artwork would be refunded. Exchanges, however, will be considered case by case depending on the reason provided for returning the artwork. Commissioned artwork cannot be refunded or exchanged at all. ",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq-section"
      className="mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg"
    >
      <h3 className="text-xl font-normal text-white text-center mb-6">FAQ</h3>
      <h2 className="text-4xl lg:text-6xl font-semibold text-center text-white">
        Frequently asked <br /> questions.
      </h2>
      <div className="w-full px-4 pt-16">
        {/* Questions using Map functions*/}
        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6">
          {faqsData?.map((item, index) => (
            <Disclosure as="div" className="mt-2" key={index}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                    <span>{item?.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                    {item?.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
