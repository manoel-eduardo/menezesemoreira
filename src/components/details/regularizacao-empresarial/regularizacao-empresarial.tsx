import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box} from "@material-ui/core";

class RegularizacaoEmpresarial extends React.Component {
    render() {
        return (
            <Box>
                <h3>Regularização Empresa</h3>
                <ul>
                    <li>Elaboração do contrato social, alterações contratuais, atas de assembleias gerais;</li>
                    <li>Pesquisa de ficha de breve relato e outros;</li>
                    <li>Registro de Empresas – Junta Comercial e Cartório Registro Civil das Pessoas Jurídicas;</li>
                    <li>Registro de Empresas nos órgãos públicos, CNPJ, Inscrição Estadual e Municipal;</li>
                    <li>Regularizações Diversas, alvarás e licenças;</li>
                    <li>Abertura, encerramento, alterações, transferências de municípios/estados e outros;</li>
                    <li>Certidões tributárias em geral;</li>
                </ul>
            </Box>
        );
    }
}

export default RegularizacaoEmpresarial;