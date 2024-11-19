import { FC, ReactNode } from "react";
import Lottie from "lottie-react";
import legoLoader from "./legoLoader.json";

interface LoadingWrapperProps {
  isLoading: boolean;
  loader?: ReactNode;
  children: ReactNode;
}

const LoadingWrapper: FC<LoadingWrapperProps> = ({
  isLoading,
  loader = <DefaultLoader />,
  children,
}) => {
  return <>{isLoading ? loader : children}</>;
};

export default LoadingWrapper;

const DefaultLoader: FC = () => {
  return (
    <div>
      <Lottie animationData={legoLoader} loop={true} autoplay={true} />
    </div>
  );
};
