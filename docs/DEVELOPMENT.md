# Desenvolvimento

## Pré-requisitos

- Node.js 22+
- npm 10+
- Python 3.12+
- Docker 27+
- Docker Compose v2+

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
source .venv/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## Convenções

- Branches: `feat/*`, `fix/*`, `docs/*`, `chore/*`.
- Commits convencionais.
- Componentes reutilizáveis.
- Dados mockados ficam no frontend.
- O frontend da V0 não depende de endpoints do backend.
