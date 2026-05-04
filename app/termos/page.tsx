import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description:
    "Condições gerais de uso deste site e das informações sobre o curso Especificação Vegetal.",
};

export default function TermosPage() {
  return (
    <main className="mx-auto max-w-3xl flex-1 px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        Legal
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-foreground">
        Termos de Uso
      </h1>
      <div className="mt-10 max-w-none space-y-6 text-base leading-relaxed text-muted">
        <p>
          Ao acessar este site, você concorda com estes termos de uso. Revise com seu
          assessor jurídico antes de divulgar em produção.
        </p>
        <p>
          <strong className="text-foreground">Finalidade do site.</strong> O conteúdo
          apresenta informações sobre o curso &quot;Especificação Vegetal&quot; e
          direciona para a página de pagamento na plataforma indicada. Preços, datas e
          vagas podem ser alterados; prevalece o que estiver descrito no momento da
          compra.
        </p>
        <p>
          <strong className="text-foreground">Propriedade intelectual.</strong> Textos,
          marca e materiais exibidos são de titularidade do professor ou licenciados.
          É proibida a reprodução sem autorização para fins comerciais.
        </p>
        <p>
          <strong className="text-foreground">Isenção.</strong> Resultados dependem da
          aplicação individual do conteúdo. Não garantimos ganhos financeiros ou
          resultados específicos em projetos profissionais.
        </p>
        <p>
          <strong className="text-foreground">Lei aplicável.</strong> Estes termos são
          regidos pelas leis brasileiras. Eventuais disputas podem ser resolvidas no foro
          da comarca do domicílio do consumidor, quando aplicável ao caso concreto.
        </p>
      </div>
      <p className="mt-12">
        <Link href="/" className="font-medium text-accent hover:underline">
          ← Voltar à página inicial
        </Link>
      </p>
    </main>
  );
}
