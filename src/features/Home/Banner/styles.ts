import { SxProps } from "@mui/system";

const styles: {
  [key: string]: SxProps;
} = {
  wrapper: {
    display: "flex",
    position: "relative",

    marginTop: "110px",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",

    justifyContent: "center",
  },

  main: {
    minHeight: "90vh",
    height: {
      mobile: "100%",
      tablet: "100%",
    },
    alignContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    width: "60%",
    gap: "30px",
    justifyContent: "center",
  },
  ratingBox: {
    display: "flex",
    gap: "2%",
  },

  avatar: {
    "&:hover": {
      scale: "1.1",
      backgroundColor: "black",
      color: "white",
    },
  },
  description: {
    fontSize: "20px",
    color: "rgb(107, 107, 120)",
    textAlign: "center",
    fontWeight: "500",
    width: "80%",
  },
  btn: {
    borderRadius: "10px",
    backgroundColor: "black",
    color: "white",
    padding: "15px 3%",
    fontSize: "18px",
    fontWeight: "bold",
    display: {
      laptop: "block",
      tablet: "none",
      mobile: "none",
    },
    "&:hover": {
      scale: "1.1",
      backgroundColor: "black",
      color: "white",
    },
  },

  heading: {
    fontSize: {
      mobile: "36px",
      tablet: "48px",
      laptop: "80px",
    },
    fontWeight: "700",
  },
};
export default styles;
