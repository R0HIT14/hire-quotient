import { SxProps } from "@mui/material";

type StylesProps = {
  [key: string]: SxProps;
};

const styles: StylesProps = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "15px 2%",
    maxWidth:'550px',
    minWidth: {
      mobile: "250px",
      tablet: "220px",
      laptop: "200px",
    },
    width:"100%",
    padding: {
      mobile: "25px 20px",
      tablet: "25px 15px 41px 15px",
      laptop: "25px 15px 41px 15px",
    },
    borderRadius: "18px",
    background: "white",
    marginRight: "1%"
    
  },
  
  ratingBox:{
    display:'flex',
    justifyContent:'space-between'
  },
  comment:{
    display:'flex',
    alignItems:'center',
    gap:"2%",
  }
};

export default styles;
