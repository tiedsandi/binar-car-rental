import { Grid, Box, Typography, TextField, Button, Link } from '@mui/material'
import { useState } from 'react'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = () => {
        if (password !== passwordConfirm) {
            setError(true)
        } else {
            setError(false)
        }
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
                    <Typography variant="h5" mb={"1.5rem"} > Create New Account</Typography>
                    {
                        error && <Box sx={{
                            backgroundColor: 'rgba(255, 0, 0, 0.1)',
                            padding: '1rem',
                            width: '34rem',
                            marginBottom: '1.5rem'
                        }}>
                            <Typography variant="body1" color="error">
                                Password not match
                            </Typography>
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
                        <Box width={"34rem"} mb={"1rem"}>
                            <Typography variant="body1"> Confirm Password </Typography>
                            <Box>
                                <TextField
                                    type="password"
                                    value={passwordConfirm}
                                    fullWidth
                                    onChange={(e) => setPasswordConfirm(e.target.value)}
                                    placeholder="Confirm Password"
                                    size="small"
                                />
                            </Box>
                        </Box>
                        <Button variant="contained" color="primary" fullWidth onClick={() => handleSubmit()}> Register </Button>
                    </Box>

                    {/* Link to login */}
                    <Box mt={"1rem"}>
                        <Typography variant="body1" color="textSecondary"> Already have an account? <Link href="/login">Login</Link></Typography>
                    </Box>

                </Box>
            </Grid>
        </Grid>
    )
}

export default Register
