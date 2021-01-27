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
        className={`flex flex-col md:flex-row bg-${props.color} items-center justify-center`}
      >
        <div className="m-4">{props.a}</div>
        <div className="m-4">{props.b}</div>
        <div className="m-4">{props.c}</div>
      </div>
    </div>
  );
}
