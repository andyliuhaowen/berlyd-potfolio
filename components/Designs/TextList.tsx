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
    <div className="mx-10 xl:mx-16 grid grid-rows-10 md:grid-rows-6 xl:grid-rows-5 grid-flow-col justify-between">
      {props.text.map((str, index) => {
        if (index === props.accent) {
          return (
            <div
              key={index}
              className={`px-2 text-${props.accentTextColor} bg-${props.accentBgColor} text-2xl`}
            >
              {str} <small className="text-lg">{props.caption}</small>
            </div>
          );
        }
        return (
          <div key={index} className="text-2xl px-2">
            {str}
          </div>
        );
      })}
    </div>
  );
}
