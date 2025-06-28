import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSend = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.send(
      'service_w1edxnt',      // Replace with your EmailJS service ID
      'template_3lcebfk',     // Replace with your EmailJS template ID
      {
        from_email: email,
        message: message,
      },
      'ZyNL6AqnyZI84JQx5'          // Replace with your EmailJS public key
    )
    .then(() => {
      setSent(true);
      setEmail('');
      setMessage('');
      setSending(false);
      setTimeout(() => setSent(false), 4000);
    })
    .catch(() => {
      setSending(false);
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <section className="py-20 px-4 bg-base-100" id="contact">
        <h2 className="text-3xl font-bold  text-blue-700 mb-10 text-center">Contact Me</h2>
      <div className="max-w-4xl mx-auto rounded-3xl shadow-xl bg-white/80 backdrop-blur-md p-10 flex flex-col md:flex-row gap-10 animate__animated animate__fadeInUp">
        {/* Left: Contact Info */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start gap-8">
          <div className="flex items-center gap-4">
            <span className="bg-green-100 text-green-700 rounded-full p-3">
              {/* Phone SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.3h12.2a1 1 0 00.9-1.3L17 13M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7" /></svg>
            </span>
            <a href="tel:+1234567890" className="text-lg font-medium text-green-700 hover:underline">
              Phone: (+880)1782332944
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-teal-100 text-teal-700 rounded-full p-3">
              {/* WhatsApp SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.72 11.06a8.94 8.94 0 01-4.72 4.72l-2.12-.85a1 1 0 00-1.11.21l-1.2 1.2a9 9 0 1112.73-12.73l-1.2 1.2a1 1 0 00-.21 1.11l.85 2.12z" /></svg>
            </span>
            <a href="https://wa.me/1234567890" className="text-lg font-medium text-teal-700 hover:underline">
              WhatsApp: (+880)1782332944
            </a>
          </div>
        </div>
        {/* Right: Contact Form */}
        <form className="flex-1 flex flex-col gap-6 items-center md:items-end w-full" onSubmit={handleSend}>
          <div className="w-full">
            <label className="block text-base font-semibold mb-1 text-blue-700" htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              required
              className="input input-bordered w-full"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={sending}
            />
          </div>
          <div className="w-full">
            <label className="block text-base font-semibold mb-1 text-blue-700" htmlFor="message">Message</label>
            <textarea
              id="message"
              required
              className="textarea textarea-bordered w-full min-h-[120px]"
              placeholder="Type your message here..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              disabled={sending}
            />
          </div>
          <button type="submit" className="btn btn-primary w-full" disabled={sending}>
            {sending ? "Sending..." : "Send"}
          </button>
          {sent && (
            <div className="alert alert-success mt-2 w-full text-center">
              Message sent successfully!
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;