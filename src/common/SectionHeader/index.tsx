import Box from "@mui/material/Box";
import { SxProps } from "@mui/system";
import styles from "./styles";
import ChildCareIcon from "@mui/icons-material/ChildCare";

type SectionHeaderProps = {
  label?: string;
  labelIcon?: boolean;
  heading: string;
  customStyle?: SxProps;
};

const SectionHeader = ({
  label,
  labelIcon = true,
  heading,
  customStyle,
}: SectionHeaderProps) => {
  return (
    <Box sx={styles.wrapper}>
      {label && (
        <Box sx={styles.label}>{label}{labelIcon && <ChildCareIcon />}</Box>
      )}
      <Box sx={{ ...styles.heading, ...customStyle } as SxProps}>{heading}</Box>
    </Box>
  );
};

export default SectionHeader;
