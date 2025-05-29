import { useState } from 'react';
import emailjs from '@emailjs/browser';

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
      await emailjs.send(
        'YOUR_SERVICE_ID', // EmailJS service ID
        'YOUR_TEMPLATE_ID', // EmailJS template ID
        {
          to_email: 'shreyabalakrishna02@gmail.com',
          from_email: form.from_email,
          subject: form.subject,
          message: form.message,
        },
        'YOUR_USER_ID' // EmailJS public key
      );
      setStatus('success');
      setForm({ from_email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col w-full">
        
      {/* Toolbar */}
      <div className="bg-gray-100 border-b border-gray-300 flex gap-4 px-4 py-2 text-xl select-none">
        <span title="Send">📤</span>
        <span title="Cut">✂️</span>
        <span title="Copy">📋</span>
        <span title="Paste">📄</span>
        <span title="Undo">↩️</span>
        <span title="Check">✔️</span>
        <span title="Spelling">🔤</span>
        <span title="Attach">📎</span>
        <span title="Priority">❗</span>
        <span title="Sign">🔑</span>
      </div>
      {/* Form */}
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col px-4 py-2 gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs">To :</span>
          <input
            type="email"
            value="shreyabalakrishna02@gmail.com"
            readOnly
            className="flex-1 border border-gray-300 px-2 py-1 text-xs bg-gray-100 rounded-sm"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs">From :</span>
          <input
            type="email"
            name="from_email"
            value={form.from_email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="flex-1 border border-gray-300 px-2 py-1 text-xs rounded-sm"
          />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs">Subject :</span>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="flex-1 border border-gray-300 px-2 py-1 text-xs rounded-sm"
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