import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box, Typography} from "@material-ui/core";

class Folha extends React.Component {
    render() {
        return (
            <Box>
                <Typography variant="h6" className="serviceName">Folha</Typography>
                <ul>
                    <li>
                        <span>Orientação e controle da aplicação da CLT e a Previdência Social</span>
                    </li>
                    <li>
                        <span>PIS, FGTS e outros aplicáveis às relações de emprego</span>
                    </li>
                    <li>
                        <span>Manutenção dos registros de empregados e serviços de rotina</span>
                    </li>
                    <li>
                        <span>Elaboração da folha de pagamento dos empregados e dos sócios (pró-labore)</span>
                    </li>
                    <li>
                        <span>Emissão as guias para recolhimento dos encargos sociais e tributos afins</span>
                    </li>
                    <li>
                        <span>Atendimento das demais exigências previstas na legislação e de fiscalização</span>
                    </li>
                    <li>
                        <span>Assessoria e Consultoria Trabalhista</span>
                    </li>
                </ul>
            </Box>
        );
    }
}

export default Folha;