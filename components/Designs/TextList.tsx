/**
 * Made by Haowen Liu in 2021
 * Component for laying out a long list of texts.
 */

class TextListProps {
  text: string[] = [];
}

export default function TextList(props: TextListProps) {
  return (
    <div className="grid grid-rows-5 grid-flow-col mx-16">
      {props.text.map((str, index) => (
        <div key={index} className="text-2xl">{str}</div>
      ))}
    </div>
  );
}
