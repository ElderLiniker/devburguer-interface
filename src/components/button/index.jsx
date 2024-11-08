import PropTypes from "prop-types"; //essa bibliotcea e pra avlidar e dizer que o clidren e uma string para o codigo nao dar pau//


import { Containerbutton } from "./styles";



export function Button({children, ...props}){   //clidern e o que tem dentro do button e o ..props ele tras todas as informações dentro do button //


    return <Containerbutton 
    {...props}
    >{children}
    </Containerbutton>
}
Button.propTypes = {
    clidren:PropTypes.string
}/* avisando oq ele e se e uma string ou um number */