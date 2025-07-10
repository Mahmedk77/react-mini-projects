import { useState } from "react";
import { images } from "./constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
const ImageSlider = () => {
  const [imgID, setimgID] = useState(0);
  const incFun = () => {
    imgID == images.length - 1 ? setimgID(0) : setimgID((prev) => prev + 1);
    console.log(imgID);
  };
  const decFun = () => {
    imgID == 0 ? setimgID(images.length - 1) : setimgID((prev) => prev - 1);
    console.log(imgID);
  };
  return (
    <div className="max-h-screen border-2 ">
      <div className="h-[300px] w-[300px] border-red-500 border-2 relative flex justify-center items-center mx-3">
        <ChevronLeft
          width={"20px"}
          height={"20px"}
          className="bg-gray-500 rounded-full text-white absolute left-0 cursor-pointer"
          onClick={decFun}
        />
        {images.map((image, idx) =>
          idx == imgID ? (
            <img
              src={image.download_url}
              alt="stock-images"
              width={"300px"}
              height={"300px"}
              key={image.id}
            />
          ) : null
        )}
        <ChevronRight
          width={"20px"}
          height={"20px"}
          className="bg-gray-500 rounded-full text-white absolute right-0 cursor-pointer"
          onClick={incFun}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
