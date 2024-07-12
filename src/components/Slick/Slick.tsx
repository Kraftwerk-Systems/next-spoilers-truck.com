import React, { useState, useEffect, forwardRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Item {
  id: string | number; // Unique identifier for each item
  component: JSX.Element; // The actual component to display
}

interface BreakpointSetting {
  breakpoint: number; // The maximum viewport width for these settings to take effect
  settings: Partial<SliderSettings>; // The settings to apply at this breakpoint
}

interface SliderSettings {
  [key: string]: string | number | boolean | BreakpointSetting[] | JSX.Element | ((i: number) => void); // Extend to include responsive settings
}

interface SlickProps {
  items: Item[];
  settings?: Partial<SliderSettings>; // Main settings
  responsiveSettings?: BreakpointSetting[]; // Array of breakpoint-specific settings
  componentClass?: string; // Optional class to add to the component
  itemClass?: string; // Optional class to add to each item
  dotsWithNumbers?: boolean;
}

interface SampleArrowProps {
  className?: string;
  style?: object;
  onClick?: () => void;
}

function PrevArrow({ className, style, onClick }: SampleArrowProps) {
  return (
    <div
      className={`Slick__arrow Slick__arrow--prev ${className}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function NextArrow({ className, style, onClick }: SampleArrowProps) {
  return (
    <div
      className={`Slick__arrow Slick__arrow--next ${className}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const defaultSettings: SliderSettings = {
  dots: true,
  infinite: true,
  speed: 250,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1000,
  cssEase: "ease-in-out",
  pauseOnHover: true,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const Slick = forwardRef<Slider, SlickProps>(
  ({ items, settings = {}, responsiveSettings = [], componentClass, itemClass, dotsWithNumbers = false }, ref) => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth); // Update width in state
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize); // Cleanup
      };
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

    // Determine if a breakpoint has been hit
    const currentBreakpoint = responsiveSettings.find(({ breakpoint }) => windowWidth <= breakpoint);

    // Use the breakpoint of the current breakpoint as part of the key for the Slider component
    const sliderKey = currentBreakpoint ? currentBreakpoint.breakpoint : "default";

    // Prepare responsive settings for react-slick
    const responsive = responsiveSettings.map(({ breakpoint, settings }) => ({
      breakpoint,
      settings: { ...settings },
    }));

    const dotsSettings = {
      customPaging: (i: number) => {
        if (dotsWithNumbers) {
          return <div className="Slick__dot">{i + 1}</div>;
        } else {
          return <div className="Slick__dot Slick__dot--pure"></div>;
        }
      },
      appendDots: (dots: JSX.Element[]) => (
        <div>
          <ul className={`Slick__dots ${dotsWithNumbers ? "" : "Slick__dots--pure"}`}>{dots}</ul>
        </div>
      ),
    };

    // Merge custom settings with defaults, including responsive settings
    const mergedSettings = {
      ...defaultSettings,
      ...settings,
      ...dotsSettings,
      responsive,
    };

    const componentClassList = `Slick${componentClass ? ` ${componentClass}` : ""}`;

    const itemClassList = `Slick__item ${itemClass ? itemClass : ""}`;

    return (
      <div className={componentClassList}>
        <Slider ref={ref} className="Slick__Slider" key={sliderKey} {...mergedSettings}>
          {items.map(({ id, component }) => (
            <div className={itemClassList} key={id}>
              {component}
            </div>
          ))}
        </Slider>
      </div>
    );
  }
);

// Set display name for better debugging and DevTools integration
Slick.displayName = "SlickSlider";

export default Slick;
