import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box, Typography} from "@material-ui/core";

class Contabilidade extends React.Component {
    render() {
        return (
            <Box>
                <Typography variant="h6" className="serviceName">Contabilidade</Typography>
                <Typography variant="body2">
                    <ul>
                        <li>
                            <span>Elaboração do plano de contas conforme a necessidade de cada cliente</span>
                        </li>
                        <li>
                            <span>Classificação e análise da documentação contábil</span>
                        </li>
                        <li>
                            <span>Elaboração do Balanço Patrimonial e Demonstração de Resultados</span>
                        </li>
                        <li>
                            <span>Elaboração e controle de depreciação/amortização</span>
                        </li>
                        <li>
                            <span>Registro de Inventário com levantamento da contagem feita pelo próprio cliente</span>
                        </li>
                        <li>
                            <span>Apresentação das obrigações acessórias exigidas pela Receita Federal</span>
                        </li>
                        <li>
                            <span>Assessoria e Consultoria Contábil</span>
                        </li>
                    </ul>
                </Typography>
            </Box>
        );
    }
}

export default Contabilidade;