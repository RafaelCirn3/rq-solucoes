# Arquitetura

A aplicação adota um monólito modular, separando frontend, backend, infraestrutura e domínio.

```text
Cloudflare
   |
 Nginx
   |-- frontend
   |-- /api -> Django/DRF
                |
            PostgreSQL
```

## Princípios

- Produto como entidade central.
- Catálogo técnico-comercial, sem carrinho, checkout ou estoque na V0.
- Frontend desacoplado da API.
- Backend modularizado por domínio.
- SEO, desempenho e conversão como requisitos arquiteturais.
- Sem microserviços, Kubernetes, Redis ou Celery até existir necessidade real.

## Domínios previstos

- companies
- catalog
- categories
- applications
- documents
- leads

## V0

O frontend usa dados mockados locais. O backend existe apenas como fundação e não é consumido pelo frontend nesta versão.
