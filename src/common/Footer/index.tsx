import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import styles from "./styles";

import { footerData } from "@/src/constant";
import { MiltonIcon } from "@/public/images";

const Footer = () => {
  const { address, content, socialIcons } = footerData;
  const [currentMenu, setCurrentMenu] = useState("");

  const toggleMenu = (name: string) => {
    if (name == currentMenu) setCurrentMenu("");
    else setCurrentMenu(name);
  };

  return (
    <>
      <Box sx={styles.wrapper}>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.sideContent}>
            <Image
              src={MiltonIcon}
              style={{
                width: "130px",
                height: "43px",
              }}
              alt="logo"
            />
            <Box sx={styles.addressMenu}>
              <Box
                component="a"
                href={address.link}
                target="_blank"
                rel="noopener"
                sx={styles.address}
              >
                {address.label}
              </Box>
            </Box>
            <Box sx={styles.linkIcons}>
              {socialIcons?.map((item) => (
                <Box
                  component="a"
                  href={item.link}
                  target="_blank"
                  rel="noopener"
                  sx={styles.linkIcon}
                  key={item.label}
                >
                  <Image src={item.icon} alt={item.label} />
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={styles.mainContentWrapper}>
            <Box sx={styles.mainContent}>
              {content?.map((item: any) => (
                <Box
                  className={item.heading}
                  sx={styles.itemContent}
                  key={item.heading}
                >
                  <Box
                    sx={styles.itemHeading}
                    onClick={() => toggleMenu(item.heading)}
                  >
                    <span>{item.heading}</span>
                    <KeyboardArrowDownIcon
                      sx={{
                        ...styles.arrowIcon,
                        transform:
                          currentMenu === item.heading
                            ? "rotate(180deg)"
                            : "none",
                      }}
                    />
                  </Box>
                  <Box
                    component="ul"
                    sx={{
                      ...styles.itemList,
                      display: {
                        mobile: currentMenu === item.heading ? "block" : "none",
                        tablet: "block",
                      },
                    }}
                  >
                    {item.list?.map((list: any) => (
                      <React.Fragment key={list.title}>
                        <Box component="li">{list.tagName}</Box>
                      </React.Fragment>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
