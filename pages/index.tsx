import Footer from "@/src/common/Footer";
import { Banner, Comment, Feature, OurFeatures } from "@/src/features/Home";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box>
        <Banner />
        <Feature />
        <OurFeatures />
        <Comment />
      </Box>
      <Footer />
    </>
  );
}
