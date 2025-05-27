"use client";
import React from "react";
// import { DotButton, useDotButton } from './EmblaCarouselDotButton'
// import {
//   PrevButton,
//   NextButton,
//   usePrevNextButtons
// } from './EmblaCarouselArrowButtons'
import useEmblaCarousel from "embla-carousel-react";
import LoaderAnimation from "../[locale]/components/LoaderAnimation";

const EmblaCarousel = (props: any) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  // const { selectedIndex, scrollSnaps, onDotButtonClick } =
  //   useDotButton(emblaApi)

  // const {
  //   prevBtnDisabled,
  //   nextBtnDisabled,
  //   onPrevButtonClick,
  //   onNextButtonClick
  // } = usePrevNextButtons(emblaApi)

  return (
    // <section className="embla text-white bg-black">
    //   <div className="embla__viewport" ref={emblaRef}>
    //     <div className="embla__container">
    //       {[1, 2, 3, 4, 6, 7, 8, 9, 10].map((index) => (
    //         <div className="embla__slide" key={index}>
    //           <div className="embla__slide__number">{index + 1}</div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   <div className="embla__controls">
    //     <div className="embla__buttons">
    //       {/* <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} /> */}
    //       {/* <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} /> */}
    //     </div>

    //     <div className="embla__dots">
    //       {/* {scrollSnaps.map((_, index) => (
    //         <DotButton
    //           key={index}
    //           onClick={() => onDotButtonClick(index)}
    //           className={'embla__dot'.concat(
    //             index === selectedIndex ? ' embla__dot--selected' : ''
    //           )}
    //         />
    //       ))} */}
    //     </div>
    //   </div>
    // </section>
    <LoaderAnimation />
  );
};

export default EmblaCarousel;
