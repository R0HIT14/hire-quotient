import { StaticImageData } from "next/image";
import styles from "./styles";
import { Avatar, Box, Rating } from "@mui/material";
type CommentCardProps = {
  comment: string;
  description: string;
  name: string;
  designation: string;
  rating: number;
  avatar?: string;
};

const CommentCard = ({
  comment,
  name,
  designation,
  description,
  avatar,
  rating,
}: CommentCardProps) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.ratingBox}>
        <Box sx={styles.comment}>
          <Avatar alt="Remy Sharp" src={avatar} />
          <Box sx={{whiteSpace:'nowrap'}}>{comment}</Box>
        </Box>
        <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={0.5}
          readOnly
        />
      </Box>
      <Box>{description}</Box>
      <Box sx={styles.ratingBox}>
        <Box>{name}</Box>
        <Box>{designation}</Box>
      </Box>
    </Box>
  );
};

export default CommentCard;
