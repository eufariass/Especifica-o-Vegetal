# Landing — Especificação Vegetal

Landing de vendas (Next.js App Router, Tailwind CSS v4) para o curso **Especificação Vegetal** / Método Casting Botânico.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Conteúdo e checkout

- Textos, preços e datas: [`content/landing.ts`](content/landing.ts).
- Variáveis de ambiente: copie `.env.example` para `.env.local` e preencha:

  - `NEXT_PUBLIC_EDUZZ_CHECKOUT_URL` — URL do checkout Eduzz (CTAs redirecionam para cá).
  - `NEXT_PUBLIC_SITE_URL` — URL canônica em produção (metadata / Open Graph).

## Deploy na Vercel

1. Conecte o repositório Git ao projeto na Vercel.
2. Framework Preset: **Next.js** (detectado automaticamente).
3. Em **Settings → Environment Variables**, adicione as mesmas variáveis acima para **Production** (e Preview, se desejar).
4. Deploy: push na branch principal ou **Deploy** manual.

## Scripts

| Comando      | Descrição        |
| ------------ | ---------------- |
| `npm run dev` | Servidor local   |
| `npm run build` | Build produção |
| `npm run start` | Servidor após build |
| `npm run lint` | ESLint           |
