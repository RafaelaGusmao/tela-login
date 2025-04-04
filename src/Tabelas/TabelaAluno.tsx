import { useEffect, useState } from 'react';
import AlunoRequests from '../fetch/AlunoRequests';
import { DataTable } from 'primereact/datatable';
import { Column} from 'primereact/column';
import { Button } from 'primereact/button';

function TabelaAluno () {
    const [alunos, setAlunos] = useState([]);

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" text/>;
    const paginatorRight = <Button type="button" icon="pi pi-download" text/>;

    useEffect(() => {
        const fetchAlunos = async () => {
            try {
                const listaDeAlunos = await AlunoRequests.listarAlunos();
                setAlunos(listaDeAlunos);
                console.table(alunos);
            } catch (error) {
                console.error(`erro ao buscar alunos: ${error}`)

            }
        };
        fetchAlunos();
    }, []);

    return (
        <>
        
        <DataTable value={alunos} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                <Column field="nome" header="Nome" style={{ width: '25%' }}>{alunos}</Column>
                <Column field="sobrenome" header="Sobrenome" style={{ width: '25%' }}></Column>
                <Column field="endereco" header="Endereco" style={{ width: '25%' }}></Column>
                <Column field="email" header="E-mail" style={{ width: '25%' }}></Column>
            </DataTable>
        
        </>
    );
}

export default TabelaAluno;

