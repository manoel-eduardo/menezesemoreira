import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box, Typography} from "@material-ui/core";

class RegularizacaoEmpresarial extends React.Component {
    render() {
        return (
            <Box>
                <Typography variant="h6" className="serviceName">Regularização Empresa</Typography>
                <ul>
                    <li>
                        <span>Elaboração do contrato social, alterações contratuais, atas de assembleias gerais</span>
                    </li>
                    <li>
                        <span>Pesquisa de ficha de breve relato e outros</span>
                    </li>
                    <li>
                        <span>Registro de Empresas – Junta Comercial e Cartório Registro Civil das Pessoas Jurídicas</span>
                    </li>
                    <li>
                        <span>Registro de Empresas nos órgãos públicos, CNPJ, Inscrição Estadual e Municipal</span>
                    </li>
                    <li>
                        <span>Regularizações Diversas, alvarás e licenças</span>
                    </li>
                    <li>
                        <span>Abertura, encerramento, alterações, transferências de municípios/estados e outros</span>
                    </li>
                    <li>
                        <span>Certidões tributárias em geral</span>
                    </li>
                </ul>
            </Box>
        );
    }
}

export default RegularizacaoEmpresarial;