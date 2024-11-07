import { Helmet } from "react-helmet-async";

const StatisticsPage = () => {
  return (
    <div className="pd-20">
      <Helmet>
        <title>Statistics- Gadget World</title>
      </Helmet>
      <div className="pb-3  bg-purple-600 text-white">
        <div className="pt-14 pb-3 rounded-b-lg md:w-10/12 md:mx-auto">
          <h1 className="text-5xl font-bold text-center">Statistics</h1>
          <p className="text-center text-base font-normal w-7/12 mx-auto pt-5 pb-12">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>
      <div className="md:w-10/12 mx-auto p-4 rounded-lg bg-white/50 backdrop-blur-md pb-16">
        <h3 className="text-2xl font-bold">Statistics</h3>
      </div>
    </div>
  );
};

export default StatisticsPage;
