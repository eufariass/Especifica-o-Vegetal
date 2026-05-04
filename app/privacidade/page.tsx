import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como tratamos dados pessoais neste site e na comunicação sobre o curso Especificação Vegetal.",
};

export default function PrivacidadePage() {
  return (
    <main className="mx-auto max-w-3xl flex-1 px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        Legal
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-foreground">
        Política de Privacidade
      </h1>
      <div className="mt-10 max-w-none space-y-6 text-base leading-relaxed text-muted">
        <p>
          Esta página descreve de forma geral como dados podem ser coletados quando você
          utiliza este site ou entra em contato sobre o curso &quot;Especificação
          Vegetal&quot;. Ajuste este texto com o assessor jurídico da sua operação antes
          da publicação oficial.
        </p>
        <p>
          <strong className="text-foreground">Dados de navegação.</strong> Serviços de
          hospedagem e analytics podem registrar informações técnicas (como endereço IP
          aproximado, tipo de dispositivo e páginas visitadas) conforme configuração da
          Vercel ou ferramentas que você integrar.
        </p>
        <p>
          <strong className="text-foreground">Contato por e-mail.</strong> Quando você
          envia mensagem para o endereço divulgado na página, utilizamos essas
          informações apenas para responder à solicitação, salvo obrigação legal em
          contrário.
        </p>
        <p>
          <strong className="text-foreground">Compras.</strong> Pagamentos processados
          pela Eduzz ou outra plataforma seguem a política de privacidade desses
          provedores. Recomendamos ler os termos na finalização da compra.
        </p>
        <p>
          <strong className="text-foreground">Seus direitos.</strong> Nos termos da LGPD,
          você pode solicitar confirmação de tratamento, acesso, correção ou eliminação
          de dados pessoais, quando aplicável, entrando em contato pelo e-mail exibido no
          rodapé do site.
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
