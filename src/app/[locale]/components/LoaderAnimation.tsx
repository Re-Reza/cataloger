"use clinet";

import Image from "next/image";
import loaderBg from "../../../../public/images/loaderBg.png";
import leftLeaf from "../../../../public/images/leftLeaf.png";
import rightLeaf from "../../../../public/images/rifghtLeaf.png";

const LoaderAnimation = () => {
  return (
    <div className="w-full bg-[#000] h-[100vh] flex justify-center items-center">
      <div className="loadercontainer">
        {/* <Image src={rightLeaf} className="absolute" alt="rightLeaf" />
        <Image src={leftLeaf} className="absolute" alt="leftLeaf" /> */}
        <div className="text-white">
          <h2>گامی برای نجات زمین</h2>
        </div>
        <div className="text-white">
          <div className="font-[800] text-[1.2em]">تبریک دوست من</div>
          <p className="font-[700]">
            دوست من، با استفاده از این کاتالوگ هوشمند، نه تنها از امکانات سریع و
            کارآمد بهره مند می شوید، بلکه با نجات 14 درخت و کاهش مصرف هزاران
            بطری پلاستیکی، نقشی مثبت در آینده ی زمین ایفا می کند
          </p>
        </div>
        <div className="text-white font-[700]">
          <div>
            شرکت تولیدی مدرن
            <br /> تجهیز صنعت برین
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoaderAnimation;
