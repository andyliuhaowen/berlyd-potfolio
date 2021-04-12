interface VerticalSpacingProps {
  size: "section" | "small";
}

export default function VerticalSpacing(props: VerticalSpacingProps) {
  return (
    <>
      {props.size == "section" && <div className="mt-24 md:mt-36"></div>}
      {props.size == "small" && <div className="mt-20"></div>}
    </>
  );
}
