import { StaticImageData } from "next/image";
import styles from "./styles";
import { Box } from "@mui/material";
type FeatureCardProps = {
  image: string | StaticImageData;
  label: string;
  description: string;
};

const FeatureCard = ({ image, label, description }: FeatureCardProps) => {
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.imageWrapper}>
        <Box component={"img"} src={`${image}`} sx={{ width: "100%" }} />
      </Box>
      <Box sx={{ background: getRandomColor(), ...styles.label }}>{label}</Box>
      <Box>{description}</Box>
    </Box>
  );
};

export default FeatureCard;
