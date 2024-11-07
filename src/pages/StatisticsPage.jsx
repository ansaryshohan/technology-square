import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  // ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const StatisticsPage = () => {
  const productData = useLoaderData();
  console.log(productData);

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
        <div className="pb-10 pt-4 flex items-center justify-center w-full">
        {/* <ResponsiveContainer width="100%" height="100%"> */}
          <ComposedChart
            width={800}
            height={400}
            data={productData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
            className="w-full"           
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="rating" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="price" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="price" stroke="#ff7300" />
          </ComposedChart>
        {/* </ResponsiveContainer> */}
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
