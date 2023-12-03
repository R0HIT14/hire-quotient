import { experimental_sx as sx, styled, SxProps } from "@mui/system";

type StylesType = {
  [key: string]: SxProps;
};

const styles: StylesType = {
  wrapper:{
    background:"white",
    borderBottom:"1px solid grey"
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "1%",
  },
  menuBtn: {
    display: {
      laptop: "none",
    },
    color: "black",
  },
  label: {
    padding: "5px 1%",
    cursor:"pointer",
    fontSize: "19px",
    color: "grey",
    fontWeight: "550",
    "&:hover": {
      textDecoration: "underline",
      color: "#000",
    },
  },

  menuOptions: {
    textWrap: "nowrap",
    flexGrow: 5,

    display: {
      mobile: "none",
      laptop: "flex",
    },
    gap: "1%",
    justifyContent: "center",
    padding: "20px",
  },

  btnContainer: {
    display: "flex",
    gap: "2%",
    flexGrow: "2",
    justifyContent: "center",
    fontWeight: "550",
  },
  btn1: {
    borderRadius: "10px",
    backgroundColor: "white",
    color: "black",
    display: {
      laptop: "block",
      tablet: "none",
      mobile: "none",
    },
    fontWeight: "550",
    "&:hover": {
      scale: "1.1",
      backgroundColor: "white",
      color: "black",
    },
  },
  btn2: {
    borderRadius: "10px",
    backgroundColor: "black",
    color: "white",
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
};

type StyleProps = {
  isScrolled: boolean;
};

export default styles;
