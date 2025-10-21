import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Dummy IMAP Email Data
interface Email {
  id: string;
  accountId: string;
  folder: string;
  subject: string;
  body: string;
  from: string;
  to: string[];
  date: string;
  aiCategory: string;
}

let emails: Email[] = [
  {
    id: '1',
    accountId: 'test1@example.com',
    folder: 'INBOX',
    subject: 'Test Email 1',
    body: 'This is a test email for demonstration.',
    from: 'sender@example.com',
    to: ['test1@example.com'],
    date: new Date().toISOString(),
    aiCategory: 'Uncategorized'
  }
];

// Health Check
app.get('/api/health', (req, res) => res.json({ status: 'Backend running' }));

// Get all emails
app.get('/api/emails', (req, res) => res.json(emails));

// Search emails
app.get('/api/emails/search', (req, res) => {
  const q = req.query.q?.toString().toLowerCase() || '';
  const filtered = emails.filter(e => e.subject.toLowerCase().includes(q) || e.body.toLowerCase().includes(q));
  res.json(filtered);
});

// AI Categorization
app.post('/api/emails/:id/categorize', (req, res) => {
  const email = emails.find(e => e.id === req.params.id);
  if (!email) return res.status(404).json({ error: 'Email not found' });

  const categories = ['Interested', 'Meeting Booked', 'Not Interested', 'Spam', 'Out of Office'];
  email.aiCategory = categories[Math.floor(Math.random() * categories.length)];

  res.json({ id: email.id, aiCategory: email.aiCategory });
});

// Suggested Reply
app.post('/api/emails/:id/suggest-reply', (req, res) => {
  const email = emails.find(e => e.id === req.params.id);
  if (!email) return res.status(404).json({ error: 'Email not found' });

  const reply = Hi, thanks for your email regarding "". I will get back to you shortly.;
  res.json({ suggestedReply: reply });
});

app.listen(PORT, () => console.log(Backend listening on port ));
