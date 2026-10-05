import Link from "next/link";

export default function SobrePage() {
  return (
    <main className="content-section">
      <div className="container">
        <div className="welcome-box">
          <div className="welcome-icon">🌎</div>

          <h1>Sobre o WorldExplorer</h1>

          <p>
            O WorldExplorer é um portal de consulta de países
            desenvolvido com Next.js, TypeScript e App Router.
            O projeto permite pesquisar países e visualizar
            informações como população, capital, região,
            bandeira, idiomas, moedas e fusos horários.
          </p>

          <div className="student-info">
            <h2>Informações do aluno</h2>

            <p>
              <strong>Nome:</strong> Gabriel Gomes
            </p>

            <p>
              <strong>Matrícula:</strong> 2421560991002
            </p>

            <p>
              <strong>Curso:</strong> Tecnologia em Análise e
              Desenvolvimento de Sistemas
            </p>

            <p>
              <strong>Disciplina:</strong> Programação e Design
              para Web III
            </p>
          </div>

          <Link href="/" className="details-button">
            ← Voltar para a página principal
          </Link>
        </div>
      </div>
    </main>
  );
}
