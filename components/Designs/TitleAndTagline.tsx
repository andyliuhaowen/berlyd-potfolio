class TitleAndTaglineProps {
  title: string = "";
  tagline: string = "";
  color: string = "";
}

export default function TitleAndTagline(props: TitleAndTaglineProps) {
  return (
    <div className="relative">
      <div
        className={`absolute ml-10 -top-4 sm:-top-8 md:-top-12 lg:-top-20 text-6xl sm:text-8xl md:text-28 lg:text-32 xl:ml-16 text-${props.color} font-calson font-bold`}
      >
        {props.title}
      </div>
      <div className="relative inline-block pt-20 pb-12 ml-10 text-xl text-left sm:pt-24 md:text-2xl lg:text-4xl md:ml-0 md:left-1/2 md:pt-28">
        {props.tagline}
      </div>
    </div>
  );
}
