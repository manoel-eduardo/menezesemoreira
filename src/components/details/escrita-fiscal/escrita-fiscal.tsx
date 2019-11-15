import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box, Typography} from "@material-ui/core";

class EscritaFiscal extends React.Component {
    render() {
        return (
            <Box>
                <Typography variant="h6" className="serviceName">Escrita Fiscal</Typography>
                <ul>
                    <li>
                        <span>Escrituração de notas fiscais de entrada, saída e serviços (tomados e prestados)</span>
                    </li>
                    <li>
                        <span>Apuração do ICMS, IPI e ISS</span>
                    </li>
                    <li>
                        <span>Declaração de Contribuições e Tributos Federais (DCTF)</span>
                    </li>
                    <li>
                        <span>Apuração do PIS, COFINS, IRPJ, IRRF, CSLL, SIMPLES</span>
                    </li>
                    <li>
                        <span>Orientação e controle de aplicação dos dispositivos legais vigentes</span>
                    </li>
                    <li>
                        <span>Atendimento das demais exigências legais, e Declarações Acessórias</span>
                    </li>
                    <li>
                        <span>Sped Fiscal/ EFD Contribuições</span>
                    </li>
                    <li>
                        <span>Orientação para emissão de notas fiscais</span>
                    </li>
                    <li>
                        <span>Assessoria e Consultoria Fiscal-Tributária.</span>
                    </li>
                </ul>
            </Box>
        );
    }
}

export default EscritaFiscal;