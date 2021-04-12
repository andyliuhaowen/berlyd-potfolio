/**
 * Made by Haowen Liu in 2021
 * Component for laying out a long list of texts.
 *
 * This is current assuming props.text is exactly 30 units long.
 */

class TextListProps {
  text: string[] = [];
  accent: number = 0;
  caption: string = "";
  accentBgColor: string = "";
  accentTextColor: string = "";
}

export default function TextList(props: TextListProps) {
  return (
    <div className="justify-between mx-10 xl:mx-16 grid grid-rows-10 md:grid-rows-6 xl:grid-rows-5 grid-flow-col">
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
          <div key={index} className="px-2 s_font">
            {str}
          </div>
        );
      })}
    </div>
  );
}
