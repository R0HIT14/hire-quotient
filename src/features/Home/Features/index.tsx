import { Avatar, AvatarGroup, Box, Button, Rating } from "@mui/material";
import styles from "./styles";
import SectionHeader from "@/src/common/SectionHeader";

import AdvantageSection from "@/src/common/Advantage";

const Feature = () => {
  let i = 0;
  return (
    <Box sx={styles.wrapper}>
      <SectionHeader
        heading={"Discover your new superpowers"}
        label="Our main features 🦸🏼"
        labelIcon={false}
      />
      <AdvantageSection
        heading={""}
        content={content}
        showButton={true}
      />
    </Box>
  );
};

const content = [
  {
    title: "Focus on what matters most for you",
    description:
      "Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.",
    src: "/images/advantage.png",
    component: "ContactButton",
    label: "Improve predictions",
    alt: "Active learning",
  },
  {
    title: "Focus on what matters most for you",
    description:
      "Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.",
    src: "/images/advantage.png",
    component: "ContactButton",
    label: "Improve predictions",
    alt: "Active learning",
  },{
    title: "Focus on what matters most for you",
    description:
      "Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.",
    src: "/images/advantage.png",
    component: "ContactButton",
    label: "Improve predictions",
    alt: "Active learning",
  },
];

export default Feature;
