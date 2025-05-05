import React from 'react';

function PoliticaPrivacidade() {
    console.log("Componente PoliticaPrivacidade carregado");

  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-600 mt-[70px]">
      <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
        <p className="mb-4">
          A sua privacidade é muito importante para nós. Esta política explica como coletamos, usamos e protegemos os seus dados pessoais quando você usa nossa plataforma.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">2. Coleta de Dados</h2>
        <p className="mb-4">
          Coletamos informações pessoais quando você se registra na plataforma, faz login ou interage com nossas funcionalidades. Essas informações podem incluir:
        </p>
        <ul className="list-decimal pl-6 mb-4">
          <li>Nome completo</li>
          <li>Endereço de e-mail</li>
          <li>Dados de login (usuário e senha)</li>
          <li>Preferências de navegação</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">3. Uso dos Dados</h2>
        <p className="mb-4">
          Utilizamos os dados coletados para as seguintes finalidades:
        </p>
        <ul className="list-decimal pl-6 mb-4">
          <li>Autenticação e criação de conta</li>
          <li>Personalização da experiência do usuário</li>
          <li>Envio de atualizações e notificações relacionadas à plataforma</li>
          <li>Melhorias na plataforma e novos recursos</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">4. Compartilhamento de Dados</h2>
        <p className="mb-4">
          Seus dados não serão compartilhados com terceiros, exceto nas seguintes circunstâncias:
        </p>
        <ul className="list-decimal pl-6 mb-4">
          <li>Quando exigido por lei ou para cumprir com obrigações legais</li>
          <li>Para proteger nossos direitos ou a segurança da plataforma e usuários</li>
          <li>Com parceiros de confiança que auxiliam na operação da plataforma (sempre com o seu consentimento)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">5. Segurança dos Dados</h2>
        <p className="mb-4">
          Implementamos diversas medidas de segurança para proteger seus dados pessoais, incluindo:
        </p>
        <ul className="list-decimal pl-6 mb-4">
          <li>Criptografia dos dados durante a transmissão</li>
          <li>Autenticação de dois fatores(em breve)</li>
          <li>Acesso restrito a dados pessoais dentro da nossa equipe</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">6. Seus Direitos</h2>
        <p className="mb-4">
          Você tem o direito de acessar, corrigir, atualizar ou excluir seus dados pessoais a qualquer momento. Caso deseje exercer qualquer um desses direitos, entre em contato conosco através dos nossos canais de suporte.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">7. Alterações na Política de Privacidade</h2>
        <p className="mb-4">
          Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre como protegemos suas informações.
        </p>
        <p className="mb-4">
          A data da última atualização está sempre visível no final desta política.
        </p>
      </section>

      <footer className="mt-8 text-center text-sm text-gray-500">
        <p>Última atualização: Abril de 2025</p>
      </footer>
    </div>
  );
}

export default PoliticaPrivacidade;
