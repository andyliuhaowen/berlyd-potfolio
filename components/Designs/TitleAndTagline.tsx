/**
 * Made by Haowen Liu in 2021
 * Component for laying out a project title with tagline underneath.
 */

interface TitleAndTaglineProps {
  title: string;
  tagline: string;
  color: string;
}

const TitleAndTagline: React.FC<TitleAndTaglineProps> = (props) => {
  return (
    <div className="relative">
      <div
        className={`absolute -top-4 ml-10 sm:-top-8 md:-top-12 lg:-top-20 xl:ml-16 text-${props.color} xl_font font-caslon font-bold`}
      >
        {props.title}
      </div>
      <div className="m_font relative ml-10 inline-block pb-12 pt-20 text-left sm:pt-24 lg:left-1/2 lg:ml-0 lg:pt-28">
        {props.tagline}
      </div>
    </div>
  );
};

export default TitleAndTagline;
