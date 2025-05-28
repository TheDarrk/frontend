
import anatomyData from "../data/anatomyData.js";
import anatomyimg from "/anatomy.webp";
import scanimg from "/scan0.gif";

export default function AnatomySection() {
  return (
    <div className="bg-white rounded-xl p-4 shadow max-w-4xl mx-auto border border-gray-100">
     
      <div className="relative w-[360px] h-[360px] mx-auto">
      
        <img
          src={anatomyimg}
          alt="Anatomy"
          className="w-full h-full object-cover rounded-lg shadow-inner"
        />

      
        <div className="absolute right-[78px] top-[70px] flex items-center gap-2 animate-pulse">
          <img 
            src={scanimg} 
            alt="Heart GIF" 
            className="w-6 h-6 drop-shadow-lg"
          />
          <span className="px-3 py-1 rounded-md text-white font-semibold bg-green-600 shadow-md hover:scale-105 transition-transform">
            Heart
          </span>
        </div>

       
        <div className="absolute left-[76px] top-[70px] flex items-center gap-2 animate-pulse">
          <span className="px-3 py-1 rounded-md text-white font-semibold bg-red-500 shadow-md hover:scale-105 transition-transform">
            Lungs
          </span>
          <img 
            src={scanimg} 
            alt="Lungs GIF" 
            className="w-6 h-14 drop-shadow-lg"
          />
        </div>

       
        <div className="absolute left-[97px] top-[28px] flex items-center gap-2 animate-pulse">
          <span className="px-3 py-1 rounded-md text-white font-semibold bg-yellow-500 shadow-md hover:scale-105 transition-transform">
            Teeth
          </span>
          <img 
            src={scanimg} 
            alt="Teeth GIF" 
            className="w-6 h-3 drop-shadow-lg"
          />
        </div>

        
        <div className="absolute left-[191px] top-[260px] flex items-center gap-2 animate-pulse">
          <img 
            src={scanimg} 
            alt="Bone GIF" 
            className="w-6 h-18 drop-shadow-lg"
          />
          <span className="px-3 py-1 rounded-md text-white font-semibold bg-green-600 shadow-md hover:scale-105 transition-transform">
            Bone
          </span>
        </div>
      </div>
    </div>
  );
}