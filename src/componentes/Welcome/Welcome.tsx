import estilo from './Welcome.module.css';

function Welcome() {
    return (
        <main className={estilo.principal}>
            <p>seja bem-vindo(a) á biblioteca.</p>
            <p>para ter uma melhor experiencia, faça login no sistema</p>
        </main>
    );
}

export default Welcome;