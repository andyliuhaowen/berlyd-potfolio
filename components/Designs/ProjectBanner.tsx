/**
 * Made by Haowen Liu in 2021
 * Component for creating a three-col project banner.
 */

interface ProjectBannerProps {
  a: string;
  b: string;
  c: string;
  bgColor: string;
  textColor: string;
}

const ProjectBanner: React.FC<ProjectBannerProps> = (props) => {
  return (
    <div className="">
      <div
        className={`flex flex-col md:flex-row bg-${props.bgColor} text-${props.textColor} s_font items-center justify-center`}
      >
        <div className="mb-4 mt-8 md:m-8 xl:mx-16 2xl:mx-28">{props.a}</div>
        <div className="my-4 md:m-8 xl:mx-16 2xl:mx-28">{props.b}</div>
        <div className="mb-8 mt-4 md:m-8 xl:mx-16 2xl:mx-28">{props.c}</div>
      </div>
    </div>
  );
};

export default ProjectBanner;
