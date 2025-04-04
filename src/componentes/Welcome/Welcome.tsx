import estilo from './Welcome.module.css';
import { useEffect, useState } from 'react';
import AlunoRequests from '../../fetch/AlunoRequests';

function Welcome() {
    const [alunos, setAlunos] = useState('');

    useEffect(() => {
        const fetchAlunos = async () => {
            try {
                const listaDeAlunos = await AlunoRequests.listarAlunos();
                setAlunos(listaDeAlunos);
                console.table(alunos);
            } catch (error) {
                console.error(`erro ao chamar API : ${error}`)

            }
        };
        fetchAlunos();
    }, []);
 
}
export default Welcome;