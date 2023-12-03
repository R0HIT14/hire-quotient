import { Avatar, AvatarGroup, Box, Button, Rating } from "@mui/material";
import styles from "./styles";
import Image from "next/image";
import SectionHeader from "@/src/common/SectionHeader";

import CommentCard from "@/src/common/CommentCard";
import Marquee from "react-fast-marquee";

const Comment = () => {
  let i = 0;
  return (
    <Box sx={styles.wrapper}>
      <SectionHeader
        heading={"See what our users say about us"}
        label="They already love our products 😍"
        labelIcon={false}
      />
      <Marquee pauseOnHover direction="right" speed={50}>
        <Box sx={styles.main}>
          {data.map((item) => (
            <CommentCard {...item} />
          ))}
        </Box>
      </Marquee>
      <Marquee pauseOnHover direction="right" speed={40}>
        <Box sx={styles.main}>
          {data.map((item) => (
            <CommentCard {...item} />
          ))}
        </Box>
      </Marquee>
      <Marquee pauseOnHover direction="right" speed={30}>
        <Box sx={styles.main}>
          {data.map((item) => (
            <CommentCard {...item} />
          ))}
        </Box>
      </Marquee>
    </Box>
  );
};

const data = [
  {
    comment: " “Highly recommend”",
    description:
      "This app has saved me so much time and stress! I used to constantly forget important dates, but now I can stay on top of everything. You should test it!",
    name: "Adam Moore",
    designation: "Software Developer",
    rating: 4,
  },
  {
    comment: " “Highly recommend”",
    description:
      "This app has saved me so much time and stress! I used to constantly forget important dates, but now I can stay on top of everything. You should test it!",
    name: "Adam Moore",
    designation: "Software Developer",
    rating: 4,
  },
  {
    comment: " “Highly recommend”",
    description:
      "This app has saved me so much time and stress! I used to constantly forget important dates, but now I can stay on top of everything. You should test it!",
    name: "Adam Moore",
    designation: "Software Developer",
    rating: 4,
  },
  {
    comment: " “Highly recommend”",
    description:
      "This app has saved me so much time and stress! I used to constantly forget important dates, but now I can stay on top of everything. You should test it!",
    name: "Adam Moore",
    designation: "Software Developer",
    rating: 4,
  },
];

export default Comment;
