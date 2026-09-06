# Deploy

## Vercel

A V0 do frontend foi desenhada para publicação isolada.

- Root Directory: `frontend`
- Build Command: `npm run build`
- Output Directory: `dist/rq-solucoes/browser`

Nenhuma variável de backend é necessária na V0.

## EC2

Fluxo previsto:

```text
Cloudflare -> EC2 -> Nginx -> frontend/backend -> PostgreSQL
```

1. Clonar o repositório.
2. Copiar `.env.example` para `.env`.
3. Preencher segredos.
4. Executar:

```bash
docker compose -f docker-compose.prod.yml up -d --build
```
