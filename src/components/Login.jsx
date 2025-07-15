import {
  Typography,
  TextField,
  Box,
  Alert,
  FormControl,
  Link,
} from "@mui/material";
import Button from "@mui/material/Button";
import LockIcon from "@mui/icons-material/Lock";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";

function Login() {
  const [alert, setAlert] = useState(false);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
      justifyContent="center"
      gap={2}
    >
      <Avatar sx={{ bgcolor: "#4338ca !important", width: 36, height: 36 }}>
        <LockIcon sx={{ fontSize: 24 }} />
      </Avatar>
      <Typography variant="h5" align="center">
        Sign in
      </Typography>

      {alert && (
        <Alert severity="success" sx={{ width: "100%", maxWidth: "360px" }}>
          Logado com sucesso! Redirecionando...
        </Alert>
      )}

      <Box
        component="form"
        display="flex"
        flexDirection="column"
        maxWidth="360px"
        gap={2}
        width="100%"
      >
        <FormControl>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            type="Username"
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "indigo",
                },
                "&:hover fieldset": {
                  borderColor: "#4338ca",
                },
              },
            }}
          />
        </FormControl>

        <TextField
          id="outlined-basic"
          label="Password"
          type="Password"
          variant="outlined"
          required
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#4338ca",
              },
              "&:hover fieldset": {
                borderColor: "#4338ca",
              },
            },
          }}
        />

        <Button
          type="button"
          onClick={() => {
            setAlert(true);
            setTimeout(() => setAlert(false), 2000);
          }}
          variant="contained"
          color="secondary"
        >
          Entrar
        </Button>
        <Box
          width="100%"
          maxWidth="360px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="" variant="body2" className="cursor-pointer">
            Esqueci a senha
          </Link>
          <Link href="" variant="body2" className="cursor-pointer">
            Realizar Cadastro
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
