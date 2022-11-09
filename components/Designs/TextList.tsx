/**
 * Made by Haowen Liu in 2021
 * Component for laying out a long list of texts.
 *
 * This is current assuming props.text is exactly 30 units long.
 */

interface TextListProps {
  text: string[];
  accent: number;
  caption: string;
  accentBgColor: string;
  accentTextColor: string;
  sm: number;
  md: number;
  xl: number;
}

const TextList: React.FC<TextListProps> = (props) => {
  return (
    <div
      className={`mx-10 grid justify-between xl:mx-16 grid-rows-${props.sm} md:grid-rows-${props.md} xl:grid-rows-${props.xl} grid-flow-col`}
    >
      {props.text.map((str, index) => {
        if (index === props.accent) {
          return (
            <div
              key={index}
              className={`px-2 text-${props.accentTextColor} bg-${props.accentBgColor} s_font`}
            >
              {str} <small className="text-lg">{props.caption}</small>
            </div>
          );
        }
        return (
          <div key={index} className="s_font px-2">
            {str}
          </div>
        );
      })}
    </div>
  );
};

export default TextList;
