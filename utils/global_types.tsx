export enum Height {
  Full,
  Medium,
  Short,
  Free,
}

export function getRemHeight(height: Height) {
  switch (height) {
    case Height.Full:
      return "h-fullsection_md lg:h-fullsection";
    case Height.Medium:
      return "h-mediumsection_md lg:h-mediumsection";
    case Height.Short:
      return "h-shortsection_md lg:h-mediumsection";
    default:
      return "";
  }
}

export function getGridHeight(height: Height) {
  switch (height) {
    case Height.Full:
      return "auto-rows-fullsection_md lg:auto-rows-fullsection";
    case Height.Medium:
      return "auto-rows-mediumsection_md lg:auto-rows-mediumsection";
    case Height.Short:
      return "auto-rows-shortsection_md lg:auto-rows-mediumsection";
    default:
      return "";
  }
}
