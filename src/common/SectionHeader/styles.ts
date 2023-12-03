import { SxProps } from "@mui/material";

type StylesProps = {
  [key: string]: SxProps;
};

const styles: StylesProps = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  label: {
    alignItems: "flex-start",
    backgroundColor:
      "var(--token-e3d8aeb2-4bb0-430b-9ecd-1d8237f4c0c1, #f1f2f4)",
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
    fontWeight:"bold"
  },
  heading: {
    fontSize: {
      mobile: "30px",
      tablet: "36px",
      laptop: "56px",
    },
    fontWeight: "bold",
    flexBasis: "auto",
    textAlign:"center",
    color: "black",
    lineHeight:"1.3"
  },
};

export default styles;
