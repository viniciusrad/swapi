import { getPeopleById } from "@/api/People";
import Link from "next/link";
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Grid,
  Chip
} from '@mui/material';
import { 
  Cake, 
  Height, 
  Scale, 
  Visibility, 
  Face, 
  Movie,
  ContentCut,
  ArrowBack
} from '@mui/icons-material';

export default async function PersonDetails({
    params,
}: {
    params: { id: string };
}) {
    const person = await getPeopleById(params.id);

    return (
        <Box sx={{ bgcolor: 'grey.900', minHeight: '100vh', py: 4 }}>
            <Container>
                <Link
                    href="/people"
                    style={{ textDecoration: 'none' }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 4, color: '#ffd700', '&:hover': { color: '#ffc000' } }}>
                        <ArrowBack />
                        <Typography>Voltar para a lista</Typography>
                    </Box>
                </Link>

                <Paper 
                    sx={{
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        p: 4
                    }}
                >
                    <Typography variant="h3" component="h1" sx={{ color: '#ffd700', mb: 4, pb: 2, borderBottom: '1px solid rgba(255, 215, 0, 0.3)' }}>
                        {person.name}
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.05)' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Cake sx={{ color: '#ffd700' }} />
                                    <Typography sx={{ color: 'white' }}>
                                        Birth Year: {person.birth_year}
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Paper sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.05)' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Height sx={{ color: '#ffd700' }} />
                                    <Typography sx={{ color: 'white' }}>
                                        Height: {person.height}cm
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Paper sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.05)' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Scale sx={{ color: '#ffd700' }} />
                                    <Typography sx={{ color: 'white' }}>
                                        Mass: {person.mass}kg
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>

                        <Grid item xs={12}>
                            <Paper sx={{ p: 3, bgcolor: 'rgba(255, 255, 255, 0.05)' }}>
                                <Typography variant="h6" sx={{ color: '#ffd700', mb: 3 }}>
                                    Features
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Chip
                                            icon={<Visibility />}
                                            label={`Eyes: ${person.eye_color}`}
                                            sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', color: 'white', width: '100%' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Chip
                                            icon={<ContentCut />}
                                            label={`Hair: ${person.hair_color}`}
                                            sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', color: 'white', width: '100%' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Chip
                                            icon={<Face />}
                                            label={`Gender: ${person.gender}`}
                                            sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', color: 'white', width: '100%' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={3}>
                                        <Chip
                                            icon={<Movie />}
                                            label={`Films: ${person.films.length}`}
                                            sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', color: 'white', width: '100%' }}
                                        />
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>

                        <Grid item xs={12}>
                            <Paper sx={{ p: 3, bgcolor: 'rgba(255, 255, 255, 0.05)' }}>
                                <Typography variant="h6" sx={{ color: '#ffd700', mb: 3 }}>
                                    Additional Information
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6}>
                                        <Paper sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.05)' }}>
                                            <Typography sx={{ color: 'grey.400' }}>Skin Color</Typography>
                                            <Typography sx={{ color: 'white', fontWeight: 'bold' }}>{person.skin_color}</Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Paper sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.05)' }}>
                                            <Typography sx={{ color: 'grey.400' }}>Vehicles</Typography>
                                            <Typography sx={{ color: 'white', fontWeight: 'bold' }}>{person.vehicles.length} vehicles</Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Paper sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.05)' }}>
                                            <Typography sx={{ color: 'grey.400' }}>Starships</Typography>
                                            <Typography sx={{ color: 'white', fontWeight: 'bold' }}>{person.starships.length} starships</Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Paper sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.05)' }}>
                                            <Typography sx={{ color: 'grey.400' }}>Species</Typography>
                                            <Typography sx={{ color: 'white', fontWeight: 'bold' }}>{person.species.length} species</Typography>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
} 