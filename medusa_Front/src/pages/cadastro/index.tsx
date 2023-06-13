import { Box, Input } from "@chakra-ui/react";
import "./cadastro.modules.css";

export default function Cadastro() {
  return (
    <>
      <Box>
        <label>
          <Input
            name="example"
            className="option-input radio circlegg"
            type="radio"
          />
        </label>
        <label>
          <Input
            name="example"
            className="option-input radio circlegg"
            type="radio"
          />
        </label>
        <label>
          <Input
            name="example"
            className="option-input radio circlegg"
            type="radio"
          />
        </label>
      </Box>
    </>
  );
}
