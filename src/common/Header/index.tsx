import { AppBar, Box, Container, Toolbar, Button } from "@mui/material";

import Image from "next/image";

import styles from "./styles";
import { MiltonIcon } from "@/public/images";

type HeaderProps = {
  defaultMenu: any;
};

const Header = ({ defaultMenu }: HeaderProps) => {
  return (
    <AppBar sx={styles.wrapper}>
      <Container maxWidth={false}>
        <Toolbar disableGutters sx={styles.toolbar}>
          <Box component={"a"} href="/">
            <Image
              src={MiltonIcon}
              style={{
                width: "130px",
                height: "43px",
              }}
              alt="logo"
            />
          </Box>

          <Box sx={styles.menuOptions}>
            {defaultMenu.map((item: any) => (
              <Box key={item.label} sx={styles.label}>
                {item.label}
              </Box>
            ))}
          </Box>
          <Box sx={styles.btnContainer}>
            <Button sx={styles.btn1} variant="contained">
              Login
            </Button>
            <Button sx={styles.btn2} variant="contained">
              Get started
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
