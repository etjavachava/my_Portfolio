import { Box,Stack, Typography } from '@mui/material';

interface ProfileProps {
  name: string;
  email: string;
  phone: string;
  address: string;
}

function ProfileInfo({ name, email, phone, address }: ProfileProps) {
  return (
    <>
      <Stack spacing={2}>
        <Box>
          <Typography variant='body1' fontWeight={800}>NAME:</Typography>
          <Typography>{name}</Typography>
        </Box>
        <Box>
          <Typography fontWeight={800}>PHONE:</Typography>
          <Typography>{phone}</Typography>
        </Box>
        <Box>
          <Typography fontWeight={800}>EMAIL</Typography>
          <Typography>{email}</Typography>
        </Box>
        <Box>
          <Typography fontWeight={800}>ADDRESS:</Typography>
          <Typography>{address}</Typography>
        </Box>
      </Stack>
    </>
  );
}

export default ProfileInfo;
