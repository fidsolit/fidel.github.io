

import Image from "next/image";
import {motion} from "framer-motion";
const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row">
      {/* {image conatainer} */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative ">
        <Image src="/hero.png" alt="" fill className="object-contain" />
      </div>
      {/* {text container} */}
      <div className="h-1/2  lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">

{/* title here */}
        <h1 className="text-4xl md:text-6xl font-bold"> Crafting digital experience, crafting tommorow</h1>

        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, reprehenderit tempore nemo voluptatibus dolores natus culpa exercitationem temporibus officia! Distinctio quibusdam consequuntur voluptas dolor dolores! Accusamus nesciunt tenetur iste magni?</p>
     
     <div className="flex gap-4">
      <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View my work</button>
      <button className="p-4 rounded-lg ring-1 ring-black">Contact me</button>


     </div>
      </div>
    </div>
  );
};

export default Homepage;
