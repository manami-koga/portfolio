import { Box, Container, Typography, Grid, Button } from "@mui/material"
import { Header } from "../components/frame/Header"
import { Footer } from "../components/frame/Footer"
import { useNavigate } from "react-router-dom"


//ホームページの表示
export const Home = () => {

    
    const navigate = useNavigate();
   
    //資格一覧ページへ遷移するための関数
    const handleQualification = () => {
        navigate("/qualifications");
    }

    //成果物一覧ページへ遷移するための関数
    const handleWorks = () => {
        navigate("/works");
    }

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

            {/*スキルセクションの表示*/}
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
                            <Button variant="contained" size="large" onClick={handleQualification}>資格一覧へ</Button>
                        </Box>
                    </Grid>
                </Container>
            </Box>

            {/*成果物セクションの表示*/}
            <Box>
                <Container maxWidth="md">
                    <Grid container rowSpacing={2} columnSpacing={2}>
                        <Box sx={{ width: '100%', textAlign: 'center', marginBottom: 2 }}>
                            <Typography component="h2" variant="h2">
                                成果物
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
                            <Button variant="contained" size="large" onClick={handleWorks}>成果物一覧へ</Button>
                        </Box>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    )
}