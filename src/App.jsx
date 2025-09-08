import React from 'react';

export default function App() {
  return (
    <div style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1>Campout Scheduler (PWA)</h1>
      <p>This is a starter PWA scaffold. Connect to Supabase by adding environment variables.</p>
      <ul>
        <li>Scan invite QR to enter</li>
        <li>Register household (name + family members)</li>
        <li>View locations & available slots</li>
      </ul>
      <p>Next: wire up Supabase client and implement reservation flows.</p>
    </div>
  );
}
