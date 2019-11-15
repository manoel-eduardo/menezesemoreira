import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box} from "@material-ui/core";

class Folha extends React.Component {
    render() {
        return (
            <Box>
                <h3>Folha</h3>
                <ul>
                    <li>Orientação e controle da aplicação da CLT e a Previdência Social;</li>
                    <li>PIS, FGTS e outros aplicáveis às relações de emprego;</li>
                    <li>Manutenção dos registros de empregados e serviços de rotina;</li>
                    <li>Elaboração da folha de pagamento dos empregados e dos sócios (pró-labore);</li>
                    <li>Emissão as guias para recolhimento dos encargos sociais e tributos afins;</li>
                    <li>Atendimento das demais exigências previstas na legislação e de fiscalização;</li>
                    <li>Assessoria e Consultoria Trabalhista;</li>
                </ul>
            </Box>
        );
    }
}

export default Folha;