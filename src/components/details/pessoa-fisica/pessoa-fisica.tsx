import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box} from "@material-ui/core";

class PessoaFisica extends React.Component {
    render() {
        return (
            <Box>
                <h3>Pessoa Física</h3>
                <ul>
                    <li>Análise elabora e acompanhamento da declaração de imposto de renda</li>
                    <li>Apuração do ganho de capital sobre a compra/venda de imóveis</li>
                    <li>Apuração do ITCD</li>
                    <li>Folha de pagamento do profissional doméstico (E-SOCIAL)</li>
                </ul>
            </Box>
        );
    }
}

export default PessoaFisica;