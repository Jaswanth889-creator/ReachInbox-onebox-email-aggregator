# ReachInbox OneBox Email Aggregator

## 1. Setup Instructions

### Requirements
- Docker & Docker Compose
- Node.js 18+ (optional if running locally)
- NPM 9+

### Steps
1. Clone repository:
```bash
git clone <your-repo-url>
cd reachinbox-onebox
````

2. Start all services (backend, frontend, Elasticsearch):

```bash
docker compose up -d --build
```

3. Access:

* Frontend UI: [http://localhost:5173](http://localhost:5173)
* Backend API: [http://localhost:5000/api/health](http://localhost:5000/api/health)
* Elasticsearch: [http://localhost:9200](http://localhost:9200)

### Environment Variables

* Backend: `.env` (optional)

  ```
  PORT=5000
  SLACK_WEBHOOK_URL=<your-slack-webhook>
  WEBHOOK_SITE_URL=<webhook-site-url>
  ```

---

## 2. Architecture Overview

**Core Components:**

1. **IMAP Sync Service:**

   * Persistent IMAP connections using `node-imap` (placeholder in code)
   * Real-time email sync with last 30 days history

2. **Persistence Layer:**

   * **Elasticsearch:** Full-text searchable email storage
   * **Vector DB (optional for RAG):** For AI-powered suggested replies

3. **API Layer (Node.js + TypeScript):**

   * Email retrieval, search, AI categorization, suggested replies
   * Webhook & Slack integrations

4. **Frontend (React + Vite):**

   * Email list display
   * Filters by account/folder
   * Buttons for AI categorization & suggested reply demonstration

---

## 3. Feature Implementation Breakdown

| Feature                      | Status / Description                                                                     |
| ---------------------------- | ---------------------------------------------------------------------------------------- |
| Real-Time Email Sync         | Placeholder implemented; demonstrates structure and API endpoints                        |
| Searchable Storage           | Elasticsearch index integration ready                                                    |
| AI-Based Categorization      | Dummy endpoint assigns random categories; ready for LLM integration                      |
| Slack & Webhook              | Endpoint structure present; easy to connect webhooks                                     |
| Frontend Interface           | Fully functional UI for listing emails, filtering, categorization, and suggested replies |
| AI-Powered Suggested Replies | RAG placeholder implemented with dummy context and reply                                 |

