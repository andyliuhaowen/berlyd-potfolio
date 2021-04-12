/**
 * Made by Haowen Liu in 2021
 * Component for laying out a three-image group with text side by side.
 */

interface IImageAndTextProps {
  title: string;
  color: string;
  text: string[];
  imageOnLeft: boolean;
}

const ThreeImageAndText: React.FunctionComponent<IImageAndTextProps> = (
  props
) => {
  return (
    <div
      className={`mx-10 xl:mx-16 flex flex-col h-auto mt-28 md:mt-32 lg:h-fullsection_lg xl:h-fullsection ${
        props.imageOnLeft ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      <div className="relative mb-16 lg:w-2/3 h-fullsection_md lg:h-auto lg:mb-0">
        <div className="relative h-full">{props.children}</div>
      </div>
      <div
        className={`lg:w-1/3 flex flex-col ${
          props.imageOnLeft ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <div className={`mb-12 font-bold text-${props.color} m_font`}>
          {props.title}
        </div>
        <div className="flex flex-col flex-grow">
          <div className="my-auto">
            {props.text.map((line, index) => (
              <div key={index} className="text-black s_font">
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeImageAndText;
