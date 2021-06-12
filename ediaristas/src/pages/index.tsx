import { Button, Typography, Container } from "@material-ui/core";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import {
  FormElementsContainer,
  ProfessionalsPaper,
  ProfessionalsContainer,
} from "@styles/pages/index.style";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={"99.999-9999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
          />
          <Typography color={"error"}>CEP inválido</Typography>
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
          >
            Buscar
          </Button>
        </FormElementsContainer>

        <ProfessionalsPaper>
          <ProfessionalsContainer>
            <UserInformation
              name={"Rossicler Júnior"}
              picture={"https://github.com/rossicler.png"}
              rating={3}
              description={"Brasília"}
            />
            <UserInformation
              name={"Rossicler Júnior"}
              picture={"https://github.com/rossicler.png"}
              rating={3}
              description={"Brasília"}
            />
            <UserInformation
              name={"Rossicler Júnior"}
              picture={"https://github.com/rossicler.png"}
              rating={3}
              description={"Brasília"}
            />
            <UserInformation
              name={"Rossicler Júnior"}
              picture={"https://github.com/rossicler.png"}
              rating={3}
              description={"Brasília"}
            />
            <UserInformation
              name={"Rossicler Júnior"}
              picture={"https://github.com/rossicler.png"}
              rating={3}
              description={"Brasília"}
            />
            <UserInformation
              name={"Rossicler Júnior"}
              picture={"https://github.com/rossicler.png"}
              rating={3}
              description={"Brasília"}
            />
          </ProfessionalsContainer>
        </ProfessionalsPaper>
      </Container>
    </div>
  );
}
