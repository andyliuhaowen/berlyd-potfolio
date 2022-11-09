/**
 * Made by Haowen Liu in 2021
 * Define global types used across the project.
 */

export enum Height {
  Full,
  Medium,
  Short,
  Free,
}

export enum Width {
  Full,
  Padded,
  ExtraPadded,
}

export function getRemHeight(height: Height) {
  switch (height) {
    case Height.Full:
      return "h-fullsection_md lg:h-fullsection_lg xl:h-fullsection";
    case Height.Medium:
      return "h-mediumsection_md lg:h-mediumsection_lg xl:h-mediumsection";
    case Height.Short:
      return "h-shortsection_md lg:h-shortsection_lg xl:h-shortsection";
    default:
      return "";
  }
}

export function getMarginForWidth(width: Width) {
  switch (width) {
    case Width.Full:
      return "w-full";
    case Width.Padded:
      return "mx-10 xl:mx-16";
    case Width.ExtraPadded:
      return "mx-16 lg:mx-48 xl:mx-64";
  }
}
