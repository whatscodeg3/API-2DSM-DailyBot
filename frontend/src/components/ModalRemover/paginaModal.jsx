import { api } from '../../services/api';

import './removestyleAbrirFecharModal.css'
import { Modal, BotaoCancelar, BotaoExcluir, Container, ModalTexto } from './styles'

function PaginaModal({ id }) {
    console.log(id)
    // fechar
    function fechar() {
        document.querySelector('.modal').classList.remove('show')

    }
    async function remover() {
        document.querySelector('.modal').classList.remove('show')

        await api.delete(`/associados/${id}`);
    }


    return (
        <>
            <Container>
                <Modal className="modal">
                    <ModalTexto>Tem certeza que deseja <br /> excluir este associado?</ModalTexto>
                    <div style={{display: 'flex', gap: '70px', justifyContent: 'center'}}>
                        <BotaoCancelar onClick={fechar}>Cancelar</BotaoCancelar>
                        <BotaoExcluir onClick={() => remover()}>Excluir</BotaoExcluir>
                    </div>
                </Modal>
            </Container>
        </>
    )
}

export default PaginaModal;