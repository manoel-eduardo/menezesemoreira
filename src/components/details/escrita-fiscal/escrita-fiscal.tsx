import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box} from "@material-ui/core";

class EscritaFiscal extends React.Component {
    render() {
        return (
            <Box>
                <h3>Escrita Fiscal</h3>
                <ul>
                    <li>Escrituração de notas fiscais de entrada, saída e serviços (tomados e prestados);</li>
                    <li>Apuração do ICMS, IPI e ISS;</li>
                    <li>Declaração de Contribuições e Tributos Federais (DCTF);</li>
                    <li>Apuração do PIS, COFINS, IRPJ, IRRF, CSLL, SIMPLES;</li>
                    <li>Orientação e controle de aplicação dos dispositivos legais vigentes;</li>
                    <li>Atendimento das demais exigências legais, e Declarações Acessórias;</li>
                    <li>Sped Fiscal/ EFD Contribuições;</li>
                    <li>Orientação para emissão de notas fiscais;</li>
                    <li>Assessoria e Consultoria Fiscal-Tributária.</li>
                </ul>
            </Box>
        );
    }
}

export default EscritaFiscal;