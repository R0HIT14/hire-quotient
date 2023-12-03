import { SxProps } from "@mui/system";
import { StaticImageData } from "next/image";
import { Dispatch, ElementType, ReactNode, SetStateAction } from "react";

export type AdvantageData = {
  title: string;
  description: string;
  description_1?: string;
  bulletPoints?: string[];
  src: StaticImageData | string;
  image?: {
    altTag: string;
    image: { url: string };
  };
  label?: string;
  alt?: string;
};

export type AdvantageSectionProps = {
  heading?: string;
  content: AdvantageData[];
  customStyles?: SxProps;
  headingBullet?: ElementType<any>;
  dotSideImage?: boolean;
  component?: string;
  showButton?: boolean;
};
