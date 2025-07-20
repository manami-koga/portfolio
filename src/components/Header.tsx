//ヘッダー
import { AppBar, Box, Container, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material"

import styles from './Styled.module.css';
import { useState } from "react";
import { Link } from "react-router-dom"

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
    },
     {
        text: "資格一覧",
        path: "/qualifications",
        exact: false
    }
    
]
export const Header = () => {

    const [open, setOpen] = useState(false); //ドロワーの開閉状態を管理するステート

    const handleDrawerOpen = () => {
        setOpen(true); //ドロワーを開く
    }

    const handleDrawerClose = () => {
        setOpen(false); //ドロワーを閉じる
    }

    return (
        <>
            <AppBar component={"header"} position="static" className={styles.frame}>{/**ヘッダーの土台 */}

                <Container maxWidth="md">{/**表示を横画面に対して900以上のサイズで表示 */}

                    <Box sx={{ display: "flex", justifyContent: "sapace-between" }}>{/**justifyContent:子要素の並び指定 */}
                        <Box>{/*左側 */}
                            <Typography component={"h1"}>{/* マテリアルUIでの画像表示*/}
                                {/*<img src={} alt="ポートフォリオサイト" height="60" width="auto"></img>*/}
                            </Typography>
                        </Box>

                        <Box>{/*右側 */}
                            <List component="nav" sx={{ display: "flex", justifyContent: "flex-start" }}>{/**ナビゲーションリンクのリスト化 */}

                                <ListItem disablePadding >{/**スマホ用処理 */}
                                    <ListItemButton onClick={handleDrawerOpen} sx={{ textAlign: "center", display: { xs: 'block', md: 'none' } }}>
                                        <ListItemText primary={<MenuIcon />}></ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                {
                                    setHeader.map((url) => (
                                        <ListItem disablePadding >{/**PC用処理 */}
                                            <ListItemButton sx={{ textAlign: "center", display: { xs: 'none', md: 'block' } }} component={Link} to={url.path}>  {/*リストアイテムのリンク化 */}
                                                <ListItemText primary={url.text}></ListItemText>
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                            </List>
                        </Box>

                         {/**スマホ用処理 開いたDrawer処理 */}
                        <Drawer anchor="right" open={open} onClose={handleDrawerClose} >{/**ドロワーの設定 */}

                            {/**ハンバーガメニュー中身の設定 　開いている状態 */}
                            <List component="nav" sx={{ display: "block", justifyContent: "normal" }}>{/**ナビゲーションリンクのリスト化 */}
                                <ListItem disablePadding >
                                    <ListItemButton onClick={handleDrawerClose} sx={{ textAlign: "center", borderBottom: "solid 1px" }}>
                                        <ListItemText primary={<CloseIcon />}></ListItemText>
                                    </ListItemButton>
                                </ListItem>

                                {/**リンク項目の生成 */}
                                {
                                    setHeader.map((url) => (
                                        <ListItem disablePadding >
                                            <ListItemButton onClick={handleDrawerClose} sx={{ textAlign: "center", borderBottom: "solid 1px" }} component={Link} to={url.path}>  {/*リストアイテムのリンク化 */}
                                                <ListItemText primary={url.text}></ListItemText>
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                            </List>
                        </Drawer>
                    </Box>
                </Container>
            </AppBar>
        </>
    )
}
