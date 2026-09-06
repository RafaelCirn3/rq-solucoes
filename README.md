# RQ Soluções

Catálogo técnico-comercial B2B para apresentação e geração de oportunidades comerciais dos produtos e soluções representados pela RQ Soluções.

## Status

V0 em desenvolvimento.

- Frontend mockado para demonstrações e deploy no Vercel.
- Backend Django/DRF criado como fundação arquitetural, ainda sem integração com o frontend.
- Infraestrutura preparada para execução local e produção via Docker Compose.

## Arquitetura

Monólito modular com frontend e backend desacoplados:

```text
frontend/  -> Angular (mock local na V0)
backend/   -> Django + DRF
postgres   -> persistência futura do catálogo
nginx      -> proxy/reverse proxy em produção
```

A entidade central do domínio é `Product`. Representadas, categorias, aplicações, documentação técnica e leads orbitam o catálogo de produtos.

## Frontend

```bash
cd frontend
npm install
npm start
```

## Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Linux/macOS
# .venv\Scripts\activate  # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## Docker

```bash
docker compose up --build
```

Produção:

```bash
docker compose -f docker-compose.prod.yml up -d --build
```

Consulte `docs/` para arquitetura, requisitos, desenvolvimento, deploy e roadmap.
