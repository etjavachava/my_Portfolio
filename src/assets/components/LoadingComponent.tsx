import { Box, CircularProgress, Typography } from '@mui/material';

function LoadingComponent() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: 2,
      }}
    >
      <CircularProgress color="primary" />
      <Typography variant="h6" color="primary">
        Loading...
      </Typography>
    </Box>
  );
}

export default LoadingComponent;