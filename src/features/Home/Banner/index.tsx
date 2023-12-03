import { Avatar, AvatarGroup, Box, Button, Rating } from "@mui/material";
import styles from "./styles";
import Image from "next/image";
import SectionHeader from "@/src/common/SectionHeader";
import { HomePageImage } from "@/public/images";

const Banner = () => {
  let i = 0;
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.main}>
        <SectionHeader
          heading={"Your new favorite calendar 🗓️ app"}
          label="An other way to manage time️"
          customStyle={styles.heading}
          labelIcon = {false}
        />
        <Box sx={styles.description}>
          Here you should explain how cool your app is. Remember, focus on the
          benefits for your users, not on the features.{" "}
        </Box>
        <Button sx={styles.btn} variant="contained">
          Get started It's free
        </Button>
        <Box sx={styles.ratingBox}>
          <AvatarGroup
            renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
            total={4251}
          >
            {Array.from({ length: 5 }, (_, i) => (
              <Avatar key={i} sx={styles.avatar} />
            ))}
          </AvatarGroup>

          <Box>
            <Rating
              name="half-rating-read"
              defaultValue={5}
              precision={0.5}
              readOnly
            />
            <Box sx={{ whiteSpace: "nowrap" }}>From 200+ happy users</Box>
          </Box>
        </Box>
      </Box>
      <Image
        src={HomePageImage}
        alt={"image"}
        style={{
          width: "80%",
          height: "100%",
          borderRadius: "16px",
          boxShadow: "0 4px 4px #0000000a",
        }}
      />
    </Box>
  );
};

export default Banner;
