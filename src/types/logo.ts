import type { ComponentType, SVGProps } from "react";

/**
 * Shared descriptor for brand or technology logos across the portfolio UI.
 */
export type LogoItem = {
  /** Display name used for labeling and accessibility. */
  name: string;
  /** Optional destination URL for the logo tile. */
  href?: string;
  /** Inline SVG component rendered when available. */
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
  /** Static image fallback for raster or complex artwork. */
  imgSrc?: string;
  /** Optional brand color used to tint the icon on hover/focus. */
  brandColorHex?: string;
};
