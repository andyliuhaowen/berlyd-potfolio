/**
 * Made by Haowen Liu in 2021
 * Component for laying out a long list of texts.
 *
 * This is current assuming props.text is exactly 30 units long.
 */

interface ITextListProps {
  text: string[];
  accent: number;
  caption: string;
  accentBgColor: string;
  accentTextColor: string;
  sm: number;
  md: number;
  xl: number;
}

export default function TextList(props: ITextListProps) {
  return (
    <div
      className={`justify-between mx-10 xl:mx-16 grid grid-rows-${props.sm} md:grid-rows-${props.md} xl:grid-rows-${props.xl} grid-flow-col`}
    >
      {props.text.map((str, index) => {
        if (index === props.accent) {
          return (
            <pre
              key={index}
              className={`px-2 text-${props.accentTextColor} bg-${props.accentBgColor} s_font font-roboto`}
              dangerouslySetInnerHTML={{ __html: str }}
            >
              {/*<small className="text-lg">{props.caption}</small>*/}
            </pre>
          );
        }
        return (
          <pre
            key={index}
            className="px-2 s_font font-roboto"
            dangerouslySetInnerHTML={{ __html: str }}
          ></pre>
        );
      })}
    </div>
  );
}
