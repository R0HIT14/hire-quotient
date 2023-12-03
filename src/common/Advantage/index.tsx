
import { Box } from "@mui/material";
import { SxProps } from "@mui/system";

import Image from "next/image";
import { useEffect, useRef } from "react";

import styles from "./styles";
import { AdvantageSectionProps } from "@/src/types";

const AdvantageSection = ({
  heading,
  content,
  customStyles,
  headingBullet = undefined,
}: AdvantageSectionProps) => {
  const ref = useRef(null);
  const ids = content.map((item) => item.title.split(" ").join(""));
  const idsMobile = content.map(
    (item, idx) => item.title.split(" ").join("") + "-" + idx
  );


  const AddAnimation = () => {
    const reveals = ids.map((id) => document.getElementById(id));
    const revealsMobile = idsMobile.map((id) => document.getElementById(id));

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i]?.getBoundingClientRect().top;
      const elementTopMobile = revealsMobile[i]?.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop && elementTop < windowHeight - elementVisible) {
        if (i % 2) {
          reveals[i]?.classList.add("fadeInLeft");
        } else {
          reveals[i]?.classList.add("fadeInRight");
        }
      }
      if (
        elementTopMobile &&
        elementTopMobile < windowHeight - elementVisible
      ) {
        if (i % 2) {
          revealsMobile[i]?.classList.add("fadeInLeft");
        } else {
          revealsMobile[i]?.classList.add("fadeInRight");
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", AddAnimation);
  });

  return (
    <Box
      sx={{ ...styles.wrapper, ...customStyles } as SxProps}
      id="Advantage"
      ref={ref}
    >
      <Box component="h4" className="heading" sx={styles.heading}>
        {heading}
      </Box>
      {content.map((item, index) => (
        <Box
          className={`view ${index % 2 == 0 ? "leftView" : "rightView"}`}
          sx={index % 2 == 0 ? styles.leftView : styles.rightView}
          key={item.title}
          ref={ref}
        >
          <Box
            sx={styles.contentWrapper}
            className={`content ${item.bulletPoints ? "bullets" : ""}`}
          >
            <Box className="text">
              <Box
                component={headingBullet}
                className="listStyle"
                sx={styles.title}
              >
                {item.title}
              </Box>

              <Box sx={styles.description}>
                <Box className="description">{item.description}</Box>
              </Box>
            </Box>
          </Box>

          <Box id={ids[index]} sx={styles.imageWrapper}>
            <Image
              layout="fill"
              objectFit="contain"
              src={item.src}
              alt={`${item.alt}`}
            />
          </Box>

          <Box id={`${ids[index]}-${index}`} sx={styles.mobileOnly}>
            <Image
              layout="fill"
              objectFit="contain"
              src={item.src}
              alt={`${item.alt}`}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default AdvantageSection;
