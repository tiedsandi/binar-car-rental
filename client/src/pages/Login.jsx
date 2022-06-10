import { Grid, Box, Typography, TextField, Button, Link } from '@mui/material'
import { useState, useContext } from 'react'


import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);

    const handleSubmit = (e) => {
        if (email === '' && password === '') {
            setError(true)
        }
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({ type: "LOGIN", payload: user })
                navigate('/dashboard');
            })
            .catch((error) => {
                setError(true)
            });
    }

    return (
        <Grid container spacing={2} >
            <Grid item xs={8} height="100vh">
                <Box
                    display="flex"
                    sx={{
                        backgroundImage: 'url(/images/login.png)',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        height: '100vh',
                        zIndex: -1,
                        backgroundColor: 'rgba(13, 40, 166, 0.6)',
                    }}
                />
            </Grid>
            <Grid item xs={4} sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh'
            }}>
                <Box>
                    {/* Logo */}
                    <Box
                        sx={{
                            backgroundImage: 'url(/images/logo-login.png)',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '34px',
                            width: '100px',
                            marginBottom: '1.5rem'
                        }} />
                    <Typography variant="h5" mb={"1.5rem"} > Welcome, to Binar Rental Car </Typography>
                    {
                        error && <Box sx={{
                            backgroundColor: 'rgba(255, 0, 0, 0.1)',
                            padding: '1rem',
                            width: '34rem',
                            marginBottom: '1.5rem'
                        }}>
                            <Typography variant="body1" color="error"> Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.</Typography>
                        </Box>
                    }
                    {/* Form */}
                    <Box>
                        <Box width={"34rem"} mb={"1rem"}>
                            <Typography variant="body1"> Email </Typography>
                            <Box>
                                <TextField
                                    type="text"
                                    fullWidth
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                    size="small"
                                />
                            </Box>
                        </Box>
                        <Box width={"34rem"} mb={"1rem"}>
                            <Typography variant="body1"> Password </Typography>
                            <Box>
                                <TextField
                                    type="password"
                                    value={password}
                                    fullWidth
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    size="small"
                                />
                            </Box>
                        </Box>
                        <Button variant="contained" color="primary" fullWidth onClick={() => handleSubmit()}> Login </Button>
                    </Box>

                    {/* link to register */}
                    <Box mt={2}>
                        <Typography variant="body1" color="textSecondary">
                            Belum punya akun? Silahkan daftar <Link href="/register">disini</Link>
                        </Typography>
                    </Box>

                </Box>
            </Grid>
        </Grid>
    )
}

export default Login
