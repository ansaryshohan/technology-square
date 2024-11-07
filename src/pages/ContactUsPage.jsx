import { Helmet } from "react-helmet-async";

const ContactUsPage = () => {
  return (
    <div className="pb-20">
      <Helmet>
        <title>ContactUs- Gadget World</title>
      </Helmet>
      <div className="pb-3  bg-purple-600 text-white">
        <div className="pt-14 pb-3 rounded-b-lg md:w-10/12 md:mx-auto">
          <h1 className="text-5xl font-bold text-center">Contact Us</h1>
          <p className="text-center text-base font-normal w-7/12 mx-auto pt-5 pb-12">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className="md:w-10/12 mx-auto p-4 rounded-lg bg-white/50 backdrop-blur-md pb-16">
        <section className="p-6 text-gray-800">
          <form
            noValidate=""
            className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50"
          >
            <h2 className="w-full text-3xl font-bold leading-tight">
              Contact us
            </h2>
            <div>
              <label htmlFor="name" className="block mb-1 ml-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                required=""
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 ml-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                required=""
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 ml-1">
                Message
              </label>
              <textarea
                id="message"
                type="text"
                placeholder="Message..."
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-600 focus:ring-violet-600 hover:ring-violet-600 text-gray-50"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactUsPage;
