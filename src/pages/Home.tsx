import { Box, Container, Typography, Grid, Button } from "@mui/material"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

//ホームページの表示
export const Home = () => {
    return (
        <>
            <Header />
            <Box sx={{ height: "65vh", backgroundColor: "blue" }}>
                <Container maxWidth="md">
                    <Grid container rowSpacing={0} columnSpacing={2}>
                        {/**<Grid item xs={12} sm={6}>　エラーあり　TypeScriptの型解釈とMUIのバージョンの組み合わせが一致していない？*/}
                        <Grid>
                            <Typography component="h2" variant="h2">
                                ポートフォリオへようこそ
                            </Typography>
                        </Grid>

                        <Grid>
                            <Typography>
                                あああああああああああああああああああ
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box>
                <Container maxWidth="md">
                    <Grid container rowSpacing={2} columnSpacing={2}>
                        <Box sx={{ width: '100%', textAlign: 'center', marginBottom: 2 }}>
                            <Typography component="h2" variant="h2">
                                スキル
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2,
                                justifyContent: 'space-between',
                                flexWrap: 'nowrap'
                            }}
                        >
                            <Box sx={{ width: 200, height: 200, backgroundColor: 'red' }} />
                            <Box sx={{ width: 200, height: 200, backgroundColor: 'green' }} />
                            <Box sx={{ width: 200, height: 200, backgroundColor: 'blue' }} />
                            <Box sx={{ width: 200, height: 200, backgroundColor: 'black' }} />
                        </Box>

                        <Box sx={{ width: '100%', textAlign: 'center', marginBottom: 2 }}>
                        <Button variant="contained" size="large">資格一覧へ</Button>
                        </Box>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    )
}