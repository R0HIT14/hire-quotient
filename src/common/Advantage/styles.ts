import { keyframes, SxProps } from "@mui/system";

const view: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "5%",
};

const FadeInRight = keyframes`
   from{
     opacity:0;
     transform:translateX(60%);
    }
   to{opacity:1;}
  `;

const FadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
  }
  `;

const learnMore: SxProps = {
  cursor: "pointer",
  fontSize: "18px",
  fontWeight: 600,
  display: "flex",
  gap: "14px",
  color: "custom.spanishViolet",
};

const styles: {
  [key: string]: SxProps;
} = {
  wrapper: {
    padding: "50px 7%",
    "& .fadeInRight": {
      animationDuration: "1s",
      animationFillMode: "both",
      animationName: `${FadeInRight}`,
    },
    "& .fadeInLeft": {
      animationDuration: "1s",
      animationFillMode: "both",
      animationName: `${FadeInLeft}`,
    },
  },

  

  leftView: {
    ...view,
    flexDirection: {
      mobile: "column-reverse",
      tablet: "row",
    },
    textAlign: {
      mobile: "center",
      tablet: "left",
    },
    "&>div": {
      alignItems: {
        mobile: "center",
        tablet: "flex-start",
      },
    },
    position: "relative",
    overflow: "hidden",
  },

  rightView: {
    ...view,

    position: "relative",
    overflow: "hidden",
    flexDirection: {
      mobile: "column-reverse",
      tablet: "row-reverse",
    },
    textAlign: {
      mobile: "center",
      tablet: "left",
    },
    "&>div": {
      alignItems: {
        mobile: "center",
        tablet: "flex-end",
      },
    },
    "& .bullets": {
      textAlign: {
        mobile: "center",
        tablet: "left",
      },
      alignItems: {
        mobile: "center",
        tablet: "flex-start",
      },
    },
  },

  

  contentWrapper: {
    flexBasis: "55%",
    display: "flex",
    flexDirection: "column",
    padding: "4% 0",
  },

  imageWrapper: {
    display: "inline-block",
    position: "relative",
    height: { tablet: "400px", laptop: "500px" },
    flexBasis: "50%",
    opacity: 1,
  },

  title: {
    color: "custom.outerSpace",
    fontSize: {
      mobile: "20px",
      tablet: "20px",
      laptop: "26px",
      desktop: "32px",
    },
    fontWeight: 600,
  },

  description: {
    fontSize: {
      mobile: "16px",
      tablet: "18px",
      laptop: "24px",
    },
    padding: {
      mobile: "15px 0 45px",
      tablet: "20px 0 50px",
      laptop: "10px 0 60px",
    },
    color: "custom.taupeGray",
  },


  mobileOnly: {
    opacity: 0,
    display: {
      mobile: "block",
      tablet: "none",
    },
    width: "320px",
    height: "330px",
    position: "relative",
    overflow: "hidden",
    maxWidth: "350px",
  },
  learnMore: {
    fontSize: "24px",
  },
  end: {
    ...learnMore,
    justifyContent: "end",
  },
  start: {
    ...learnMore,
    justifyContent: "start",
  },
  startDisable: {
    ...learnMore,
    cursor: "not-allowed",
    justifyContent: "start",
    opacity: "0.5",
  },
  endDisable: {
    ...learnMore,
    cursor: "not-allowed",
    justifyContent: "end",
    opacity: "0.5",
  },
};

export default styles;
