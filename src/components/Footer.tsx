import { AppBar, Container, Typography } from "@mui/material"

import styles from './Styled.module.css';


//フッター専用
export const Footer = () => {
    return (
        <>
            <AppBar component={"footer"} position="static" className={styles.frame}>
                <Container maxWidth="md">{/**表示を横画面に対して900以上のサイズで表示 */}          
                        <Typography variant="caption">
                            <p>© 2025 My Portfolio</p>
                        </Typography>
                </Container>
            </AppBar>
        </>
    )
}