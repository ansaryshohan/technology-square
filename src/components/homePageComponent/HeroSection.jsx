import heroImg from "../../assets/banner.jpg"
const HeroSection = () => {
  return (
    <div className="pb-14 md:w-10/12 md:mx-auto">
      <div className="pt-14 pb-32 bg-purple-600 text-white rounded-b-lg">
      <h1 className="text-5xl font-bold text-center">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
      <p className="text-center text-base font-normal w-7/12 mx-auto pt-5 pb-12">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
      </div>
      <div className="w-9/12 mx-auto p-4 rounded-lg bg-white/60 backdrop-blur-md -mt-36">
        <img src={heroImg} alt="" className="w-full h-96 rounded-lg object-cover" />
      </div>
    </div>
  )
}

export default HeroSection