import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box, Typography} from "@material-ui/core";

class Contabilidade extends React.Component {
    render() {
        return (
            <Box>
                <Typography variant="h6">Contabilidade</Typography>
                <ul>
                    <li>Elaboração do plano de contas conforme a necessidade de cada cliente;</li>
                    <li>Classificação e análise da documentação contábil;</li>
                    <li>Elaboração do Balanço Patrimonial e Demonstração de Resultados;</li>
                    <li>Elaboração e controle de depreciação/amortização;</li>
                    <li>Registro de Inventário com levantamento da contagem feita pelo próprio cliente;</li>
                    <li>Apresentação das obrigações acessórias exigidas pela Receita Federal;</li>
                    <li>Assessoria e Consultoria Contábil;</li>
                </ul>
            </Box>
        );
    }
}

export default Contabilidade;