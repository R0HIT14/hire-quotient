import { SxProps } from "@mui/system";

type StyleParams = {
  [key: string]: SxProps;
};

const style: StyleParams = {
  wrapper: {
    position: "relative",
    width: "100%",
    bottom: "-34px",
    background: "rgb(241, 242, 244)",
  },

  FooterTopArrow: {
    fontSize: "larger",
  },
  contentWrapper: {
    display: "flex",
    flexGrow: {
      tablet: 0,
      laptop: 0.75,
    },
    flexDirection: {
      mobile: "column",
      tablet: "row",
    },
    padding: "24px 3%",
    alignItems: {
      mobile: "center",
      tablet: "unset",
      laptop: "unset",
    },
    gap: "3%",
  },
  mainContentWrapper: {
    position: "relative",
    flexGrow: 1,
    width: "100%",
    gap: "20px",
  },
  mainContent: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: {
      mobile: "column",
      tablet: "row",
    },
    justifyContent: { tablet: "space-between" },
    "& .Knowledge": {
      flexBasis: { tablet: "50%", laptop: "32%" },
      "& >ul": {
        display: { tablet: "flex", laptop: "block" },
        flexWrap: "wrap",
        justifyContent: "space-between",
        "& >li": {
          flexBasis: "48.5%",
        },
      },
    },
  },
  address:{textDecoration:'none', color:"black"},
  itemContent: {
    flexBasis: {
      tablet: "50%",
      laptop: "24%",
    },
    color: "custom.darkGrey",
    margin: {
      mobile: "15px 0",
      tablet: "0",
    },
  },
  itemHeading: {
    fontWeight: "600",
    fontSize: "24px",

    display: "flex",
    alignItems: "center",
  },
  itemList: {
    mb: 0,
    marginTop: {
      tablet: "8px",
      laptop: "11px",
    },
    padding: {
      mobile: "12px 10px 12px 40px",
      tablet: "0px 10px 12px 30px",
    },
    borderRadius: "8px",
    backgroundColor: {
      mobile: "custom.footerMenu",
      tablet: "transparent",
    },
    display: {
      mobile: "none",
      tablet: "block",
    },
    fontSize: { mobile: "18px", tablet: "14px", laptop: "15px" },
    "& li": {
      padding: {
        mobile: "8px 8px 8px 8px",
        tablet: "8px 8px 8px 0px",
        laptop: "11px 11px 11px 0px",
      },
      marginLeft: {
        mobile: "0",
        tablet: "-10px",
      },
    },
    listStyleType: "none",
  },
};

export default style;
