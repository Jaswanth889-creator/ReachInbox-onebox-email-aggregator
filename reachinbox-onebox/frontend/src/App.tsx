import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Email {
  id: string;
  subject: string;
  body: string;
  aiCategory: string;
}

export default function App() {
  const [emails, setEmails] = useState<Email[]>([]);
  const [status, setStatus] = useState('Checking backend...');

  const fetchEmails = () => {
    axios.get('http://localhost:5000/api/emails')
      .then(res => setEmails(res.data))
      .catch(() => setStatus('Backend not reachable'));
  };

  const categorizeEmail = (id: string) => {
    axios.post(http://localhost:5000/api/emails//categorize)
      .then(() => fetchEmails());
  };

  const suggestReply = (id: string) => {
    axios.post(http://localhost:5000/api/emails//suggest-reply)
      .then(res => alert(Suggested Reply: ));
  };

  useEffect(() => {
    axios.get('http://localhost:5000/api/health')
      .then(res => setStatus(res.data.status))
      .catch(() => setStatus('Backend not reachable'));

    fetchEmails();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>ReachInbox OneBox</h1>
      <p>Backend Status: {status}</p>
      <h2>Emails</h2>
      {emails.map(email => (
        <div key={email.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
          <strong>Subject:</strong> {email.subject} <br />
          <strong>Body:</strong> {email.body} <br />
          <strong>AI Category:</strong> {email.aiCategory} <br />
          <button onClick={() => categorizeEmail(email.id)}>Categorize AI</button>{' '}
          <button onClick={() => suggestReply(email.id)}>Suggest Reply</button>
        </div>
      ))}
    </div>
  );
}
