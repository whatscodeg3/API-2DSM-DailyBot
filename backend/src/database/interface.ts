import { resolveObjectURL } from "buffer";
import { NOMEM } from "dns";
import { AssociadoRepository } from "../repositories/associadoRepository";

export interface userNameAndSurname {
    nome: string;
    sobrenome: string;
    id: number | string
}




// associados[1].forEach((associado) => { 
//    const arrayLinks = teste(associado.nome + ''+ associado.sobrenome);
//     arrayLinks.forEach(funcaoCriaProcesso(idUsuario, link));
// })