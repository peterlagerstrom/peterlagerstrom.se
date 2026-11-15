# peterlagerstrom.se

Statisk sida på Google App Engine (`peterlagerstrom-01`). Alla filer
serveras direkt via `app.yaml`; ingen build och ingen Node-server.

## Deploy

Push/merge till `main` deployar automatiskt till App Engine
(`peterlagerstrom-01`) via GitHub Actions (`.github/workflows/deploy.yml`).
Inga nycklar används: GitHub loggar in mot Google Cloud med Workload
Identity Federation.

Manuell deploy av en testversion (utan att ta trafik):

    gcloud app deploy --no-promote --project peterlagerstrom-01
