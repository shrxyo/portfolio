import { useState } from 'react';

export default function ContactPanel() {
  const [form, setForm] = useState({
    from_email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: '84dd8eed-08f9-44fb-ba1c-af689a53ca0a',
          from_name: form.from_email.split('@')[0],
          email: form.from_email,
          subject: `Portfolio: ${form.subject}`,
          message: `New message from portfolio contact form:\n\nFrom: ${form.from_email}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`,
          to_email: 'shreyabalakrishna02@gmail.com',
          reply_to: form.from_email,
          honeypot: false,
          redirect: false,
          custom_data: {
            source: 'Portfolio Website',
            timestamp: new Date().toISOString(),
          }
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        setForm({ from_email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col w-full">
      
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col px-4 py-2 gap-4">

        <div className="grid grid-cols-[auto,1fr] gap-x-4 gap-y-2 items-center">

          <span className="text-xs">To:</span>
          <input
            type="email"
            value="shreyabalakrishna02@gmail.com"
            readOnly
            className="border border-gray-300 px-2 py-1 text-xs bg-gray-100 rounded-sm"
          />

          <span className="text-xs">From:</span>
          <input
            type="email"
            name="from_email"
            value={form.from_email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="border border-gray-300 px-2 py-1 text-xs rounded-sm"
          />

          <span className="text-xs">Subject:</span>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="border border-gray-300 px-2 py-1 text-xs rounded-sm"
          />
        </div>

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          placeholder="Message here..."
          className="flex-1 border border-blue-700 px-2 py-1 text-xs rounded-sm resize-none mt-2"
        />
        <div className="flex justify-end mt-2">
          <button
            type="submit"
            className="bg-blue-700 text-white px-4 py-1 rounded shadow hover:bg-blue-800 transition text-xs cursor-pointer"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
        {status === 'success' && <div className="text-green-600 text-xs mt-1">Message sent successfully!</div>}
        {status === 'error' && <div className="text-red-600 text-xs mt-1">Failed to send message. Please try again.</div>}
      </form>
      <div className="px-4 pb-2 pt-1 text-xs italic text-gray-700">
        Let's collaborate on something cool!
      </div>
    </div>
  );
} 