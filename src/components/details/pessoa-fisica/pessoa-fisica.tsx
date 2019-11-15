import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box, Typography} from "@material-ui/core";

class PessoaFisica extends React.Component {
    render() {
        return (
            <Box>
                <Typography variant="h6" className="serviceName">Pessoa Física</Typography>
                <ul>
                    <li>
                        <span>Análise elabora e acompanhamento da declaração de imposto de renda</span>
                    </li>
                    <li>
                        <span>Apuração do ganho de capital sobre a compra/venda de imóveis</span>
                    </li>
                    <li>
                        <span>Apuração do ITCD</span>
                    </li>
                    <li>
                        <span>Folha de pagamento do profissional doméstico (E-SOCIAL)</span>
                    </li>
                </ul>
            </Box>
        );
    }
}

export default PessoaFisica;