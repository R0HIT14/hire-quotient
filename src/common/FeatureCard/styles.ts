import { SxProps } from "@mui/material";

type StylesProps = {
  [key: string]: SxProps;
};

const styles: StylesProps = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "15px 2%",
    minWidth: {
      mobile: "250px",
      tablet: "220px",
      laptop: "200px",
    },
    width: {
      mobile: "90%",
      tablet: "47%",
      laptop: "26.5%",
    },
    padding: {
      mobile: "25px 20px",
      tablet: "25px 15px 41px 15px",
      laptop: "25px 15px 41px 15px",
    },
    borderRadius: "18px",
    background: "none",
    flexBasis: {
      mobile: "80%",
      tablet: "45%",
      laptop: "28.5%",
    },
    "&:hover": {
      scale: "1.1",
    },
  },
  imageWrapper: {
    padding: "50px 27%",
    background: "rgb(241, 242, 244)",
    borderRadius: "15px",
  },
  description: {
    textAlign: "left",
    fontSize: {
      mobile: "14px",
      tablet: "15px",
      laptop: "16px",
    },
    color: "custom.darkGrey",
  },
  label: {
    alignItems: "flex-start",
    borderRadius: "100px",
    display: "flex",
    flex: "none",
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: "10px",
    height: "min-content",
    justifyContent: "flex-start",
    overflow: "visible",
    padding: "8px 16px",
    position: "relative",
    fontWeight: "bold",
    width:"fit-content"
  },
};

export default styles;
