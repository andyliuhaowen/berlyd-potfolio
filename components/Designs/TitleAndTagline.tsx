class TitleAndTaglineProps {
  title: string = "";
  tagline: string = "";
  color: string = "";
}

export default function TitleAndTagline(props: TitleAndTaglineProps) {
  return (
    <div className="relative">
      <div
        className={`absolute ml-10 -top-4 sm:-top-8 md:-top-12 lg:-top-20 xl:ml-16 text-${props.color} font-calson font-bold xl_font`}
      >
        {props.title}
      </div>
      <div className="relative inline-block pt-20 pb-12 ml-10 text-left sm:pt-24 md:ml-0 md:left-1/2 md:pt-28 l_font">
        {props.tagline}
      </div>
    </div>
  );
}
