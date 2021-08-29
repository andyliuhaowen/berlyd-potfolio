/**
 * Made by Haowen Liu in 2021
 * Component for adding consistent vertical spacings.
 */

interface VerticalSpacingProps {
  size: "section" | "small";
}

const VerticalSpacing: React.FC<VerticalSpacingProps> = (props) => {
  return (
    <>
      {props.size === "section" && <div className="mt-24 md:mt-36"></div>}
      {props.size === "small" && <div className="mt-20"></div>}
    </>
  );
};

export default VerticalSpacing;
