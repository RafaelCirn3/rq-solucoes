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

- `Product` é a entidade central do domínio.
- Catálogo técnico-comercial, sem carrinho, checkout ou estoque na V0.
- Frontend desacoplado da API.
- Backend modularizado por domínio.
- SEO, desempenho e conversão são requisitos arquiteturais.
- Sem microserviços, Kubernetes, Redis ou Celery até existir necessidade real.

## Domínios implementados como fundação

- `companies`: fabricantes/representadas.
- `categories`: classificação comercial/técnica.
- `applications`: aplicações industriais.
- `catalog`: produtos, imagens e especificações.
- `documents`: datasheets, manuais, catálogos, certificados e desenhos.
- `leads`: base para rastreamento comercial e UTMs.

## V0

O frontend utiliza dados mockados locais e não consome a API. Os modelos do backend definem desde já o contrato conceitual que será exposto via DRF na V1.
