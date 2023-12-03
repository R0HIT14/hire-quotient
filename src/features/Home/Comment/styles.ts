import { SxProps } from "@mui/system";

const styles: {
  [key: string]: SxProps;
} = {
  wrapper: {
    display: "flex",
    position: "relative",

    marginTop: "110px",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px 3%",

    justifyContent: "center",
    padding: "20px 5%",
  },

  main: {
    display: "flex",
    flexWrap: "no wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
  ratingBox: {
    display: "flex",
    gap: "2%",
  },



};
export default styles;
