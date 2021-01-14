/**
 * Made by Haowen Liu in 2021
 * Component for laying out a long list of texts.
 */

class TextListProps {
  text: string[] = [];
  accent: number = 0;
  caption: string = "";
  accentBgColor: string = "";
  accentTextColor: string = "";
}

export default function TextList(props: TextListProps) {
  const numCol = 6;
  const numRow = Math.ceil(props.text.length / numCol);
  const chunks: string[][] = [];

  let k = 0;
  while (k < props.text.length) {
    chunks.push(props.text.slice(k, k + numRow));
    k += numRow;
  }

  return (
    <div className="flex flex-row">
      {chunks.map((row, index) => (
        <div
          key={index}
          style={{ width: `${100 / numCol}%` }}
          className="flex flex-row justify-center"
        >
          <div>
            {row.map((text, textIndex) => {
              if (index * numRow + textIndex === props.accent) {
                return (
                  <div
                    key={textIndex}
                    className={`px-2 text-${props.accentTextColor} bg-${props.accentBgColor} text-2xl`}
                  >
                    {text} <small className="text-lg">{props.caption}</small>
                  </div>
                );
              }
              return (
                <div key={textIndex} className="text-2xl px-2">
                  {text}
                </div>
              );
            })}
          </div>
        </div>
      ))}
      {/* {props.text.map((str, index) => {
        if (index === props.accent) {
          return (
            <div
              key={index}
              className={`pl-2 text-${props.accentTextColor} bg-${props.accentBgColor} text-2xl`}
            >
              {str} <small className="text-lg">{props.caption}</small>
            </div>
          );
        } else {
          return (
            <div key={index} className="text-2xl pl-2">
              {str}
            </div>
          );
        }
      })} */}
    </div>
  );
}
