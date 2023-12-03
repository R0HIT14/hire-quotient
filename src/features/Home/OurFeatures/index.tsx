import { Box } from "@mui/material";
import styles from "./styles";
import SectionHeader from "@/src/common/SectionHeader";

import FeatureCard from "@/src/common/FeatureCard";

const Banner = () => {
  let i = 0;
  return (
    <Box sx={styles.wrapper}>
      <SectionHeader
        heading={"Our features to make your life easier"}
        label="And so much more... 💼"
        labelIcon={false}
      />
      <Box sx={styles.main}>
        {data.map((item) => (
          <FeatureCard {...item} />
        ))}
      </Box>
    </Box>
  );
};

const data = [
  {
    image: "/images/featureImage.svg",
    label: "Cross-Device Sync",
    description:
      "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
  },
  {
    image: "/images/featureImage.svg",
    label: "Cross-Device Sync",
    description:
      "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
  },
  {
    image: "/images/featureImage.svg",
    label: "Cross-Device Sync",
    description:
      "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
  },
  {
    image: "/images/featureImage.svg",
    label: "Cross-Device Sync",
    description:
      "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
  },
  {
    image: "/images/featureImage.svg",
    label: "Cross-Device Sync",
    description:
      "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
  },
  {
    image: "/images/featureImage.svg",
    label: "Cross-Device Sync",
    description:
      "Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.",
  },
];

export default Banner;
