/**
 * Made by Haowen Liu in 2021
 * Component for laying out a long list of texts.
 */

class TextListProps {
  text: string[] = [];
  accent: number = 0;
  caption: string = "";
  accentColor: string = "";
}

export default function TextList(props: TextListProps) {
  return (
    <div className="grid grid-flow-col mx-16 grid-cols-6 grid-rows-5">
      {props.text.map((str, index) => {
        if (index === props.accent) {
          return (
            <div key={index} className={`text-${props.accentColor} text-2xl`}>
              {str} <small className="text-lg">{props.caption}</small>
            </div>
          );
        } else {
          return (
            <div key={index} className="text-2xl">
              {str}
            </div>
          );
        }
      })}
    </div>
  );
}
