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
        className={`absolute ml-10 -top-4 sm:-top-8 md:-top-12 lg:-top-20 xl:ml-16 text-${props.color} font-caslon font-bold xl_font`}
      >
        {props.title}
      </div>
      <div className="relative inline-block pt-20 pb-12 ml-10 text-left sm:pt-24 lg:ml-0 lg:left-1/2 lg:pt-28 m_font">
        {props.tagline}
      </div>
    </div>
  );
};

export default TitleAndTagline;
