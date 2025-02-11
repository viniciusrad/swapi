import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  Paper, 
  Container,
  Chip,
} from '@mui/material';
import { 
  Cake, 
  Height, 
  Scale, 
  Visibility, 
  Face, 
  Movie,
  ContentCut 
} from '@mui/icons-material';
import getPeople from "@/api/People";
import { Person } from "@/types/People";
import Link from "next/link";

export default async function People() {
  const people = await getPeople();

  return (
    <Box sx={{ bgcolor: 'grey.900', minHeight: '100vh', py: 4 }}>
      <Container>
        <Typography variant="h2" component="h1" align="center" sx={{ color: 'white', mb: 4 }}>
          Star Wars Characters
        </Typography>
        
        <Grid container spacing={3}>
          {people.results.map((person: Person) => {
            // Extrair o ID da URL do personagem
            const id = person.url.split('/').filter(Boolean).pop();
            
            return (
              <Grid item xs={12} md={6} lg={4} key={person.name}>
                <Link 
                  href={`/people/${id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Card 
                    sx={{
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      transition: 'all 0.3s',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        boxShadow: '0 8px 40px rgba(0,0,0,0.2)'
                      }
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" component="h2" sx={{ color: '#ffd700', mb: 2, pb: 1, borderBottom: '1px solid rgba(255, 215, 0, 0.3)' }}>
                        {person.name}
                      </Typography>

                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Paper sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.05)' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Cake sx={{ color: '#ffd700' }} />
                            <Typography sx={{ color: 'white' }}>
                              Birth Year: {person.birth_year}
                            </Typography>
                          </Box>
                        </Paper>

                        <Grid container spacing={2}>
                          <Grid item xs={6}>
                            <Paper sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.05)' }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Height sx={{ color: '#ffd700' }} />
                                <Typography sx={{ color: 'white' }}>
                                  {person.height}cm
                                </Typography>
                              </Box>
                            </Paper>
                          </Grid>
                          <Grid item xs={6}>
                            <Paper sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.05)' }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Scale sx={{ color: '#ffd700' }} />
                                <Typography sx={{ color: 'white' }}>
                                  {person.mass}kg
                                </Typography>
                              </Box>
                            </Paper>
                          </Grid>
                        </Grid>

                        <Paper sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.05)' }}>
                          <Typography variant="h6" sx={{ color: '#ffd700', mb: 2 }}>
                            Features
                          </Typography>
                          <Grid container spacing={1}>
                            <Grid item xs={6}>
                              <Chip
                                icon={<Visibility />}
                                label={person.eye_color}
                                sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <Chip
                                icon={<ContentCut />}
                                label={person.hair_color}
                                sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <Chip
                                icon={<Face />}
                                label={person.gender}
                                sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}
                              />
                            </Grid>
                            <Grid item xs={6}>
                              <Chip
                                icon={<Movie />}
                                label={`${person.films.length} films`}
                                sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}
                              />
                            </Grid>
                          </Grid>
                        </Paper>
                      </Box>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
