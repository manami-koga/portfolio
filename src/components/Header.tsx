//ヘッダー
import { AppBar, Box, Container, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import { Link } from "react-router-dom"

import styles from './Styled.module.css';

//URL一覧
const setHeader: Array<{ text: string, path: string, exact: boolean }> = [
    {
        text: "ホーム",
        path: "/",
        exact: true
    },
    {
        text: "プロフィール",
        path: "/about",
        exact: false
    },
    {
        text: "成果物一覧",
        path: "/works",
        exact: false
    }
]
export const Header = () => {
    return (
        <>
            <AppBar component={"header"} position="static"  className={styles.frame}>{/**ヘッダーの土台 */}

                <Container maxWidth="md">{/**表示を横画面に対して900以上のサイズで表示 */}
                    <Box sx={{ display: "flex", justifyContent: "sapace-between" }}>{/**justifyContent:子要素の並び指定 */}
                        <Box>{/*左側 */}
                            <Typography component={"h1"}>{/* マテリアルUIでの画像表示*/}
                                {/*<img src={} alt="ポートフォリオサイト" height="60" width="auto"></img>*/}
                            </Typography>
                        </Box>
                        <Box>{/*右側 */}
                            <List component="nav" sx={{ display: "flex", justifyContent: "flex-start" }}>{/**ナビゲーションリンクのリスト化 */}
                                {
                                 setHeader.map((url)=>(
                                    <ListItem disablePadding >
                                        <ListItemButton sx={{ textAlign: "center" }} component={Link} to={url.path}>  {/*リストアイテムのリンク化 */}
                                            <ListItemText primary={url.text}></ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                )) }
                            </List>
                        </Box>
                    </Box>
                </Container>
            </AppBar>
        </>
    )
}
