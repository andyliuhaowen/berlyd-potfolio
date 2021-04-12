/**
 * Made by Haowen Liu in 2021
 * Component for creating a three-col project banner.
 */

class ProjectBannerProps {
  a: string = "";
  b: string = "";
  c: string = "";
  color: string = "";
}

export default function ProjectBanner(props: ProjectBannerProps) {
  return (
    <div className="">
      <div
        className={`flex flex-col md:flex-row bg-${props.color} text-white s_font items-center justify-center`}
      >
        <div className="mt-8 mb-4 md:m-8 xl:mx-16 2xl:mx-28">{props.a}</div>
        <div className="my-4 md:m-8 xl:mx-16 2xl:mx-28">{props.b}</div>
        <div className="mt-4 mb-8 md:m-8 xl:mx-16 2xl:mx-28">{props.c}</div>
      </div>
    </div>
  );
}
