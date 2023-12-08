import { Button, Typography } from "@mui/material";
import fundinho from "../../assets/fundinho.png";

const Banner = () => {
  return (
    <div className="banner">
      <img className="fundinho" src={fundinho} alt="" />
      <Typography
        variant="h2"
        fontFamily={"Roboto Condensed"}
        color={"#fff"}
        fontWeight={700}
        textTransform={"uppercase"}
      >
        Melhore suas Férias
      </Typography>
      <div className="barrinha"></div>
      <Typography color={"#fff"}>
        Aproveite ofertas secretas de até 70% de desconto nos melhores hotéis ao
        redor do Mundo.
      </Typography>
      <Button
        variant="contained"
        sx={[
          {
            background: "#f36",
            padding: "16px 50px",
          },
          {
            "&:hover": {
              background: "#ff3368",
            },
          },
        ]}
      >
        Cadastre-se
      </Button>
      <Typography color={"#fff"}>Descubra essa experiência</Typography>
    </div>
  );
};

export default Banner;
