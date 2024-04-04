import { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Count = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onVisibilityChange = (isVisible: boolean) => {
    setIsVisible(isVisible);
  };

  return (
    <div className="w-full bg-black min-h-32 text-white text-center text-sm flex justify-around items-center">
      <div>
        <p className="text-lg lg:text-2xl">
          <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
            <CountUp
              duration={2.75}
              end={2000}
              start={isVisible ? 0 : undefined}
            />
          </VisibilitySensor>
        </p>
        <p>Products</p>
      </div>
      <div>
        <p className="text-lg lg:text-2xl">
          <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
            <CountUp
              duration={2.75}
              end={120}
              start={isVisible ? 0 : undefined}
            />
          </VisibilitySensor>
        </p>
        <p>Residence Projects</p>
      </div>
      <div>
        <p className="text-lg lg:text-2xl">
          <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
            <CountUp
              duration={2.75}
              end={220}
              start={isVisible ? 0 : undefined}
            />
          </VisibilitySensor>
        </p>
        <p>Hotel Projects</p>
      </div>
    </div>
  );
};

export default Count;
