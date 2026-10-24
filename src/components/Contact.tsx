import { FormEvent, useState } from 'react';
import { profile } from '../data/portfolio';

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function Contact() {
  const [formValues, setFormValues] = useState<FormValues>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [submitStatus, setSubmitStatus] = useState('');
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!formValues.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!formValues.email.trim()) {
      nextErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!formValues.subject.trim()) nextErrors.subject = 'Please add a subject.';
    if (!formValues.message.trim()) nextErrors.message = 'Please enter your message.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    setFormValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!validate()) {
      setSubmitStatus('Please fix the highlighted fields and try again.');
      return;
    }

    const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(formValues.subject.trim())}&body=${encodeURIComponent(
      `Name: ${formValues.name.trim()}\nEmail: ${formValues.email.trim()}\n\n${formValues.message.trim()}`,
    )}`;

    window.location.href = mailtoLink;
    setSubmitStatus('Your mail client has been opened. If it did not open, email me directly at poojabd.2007@gmail.com.');
    setFormValues(initialState);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
      window.alert('Copy failed. Please copy the email manually.');
    }
  };

  return (
    <section id="contact" className="section-shell">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Let&apos;s connect</p>
          <h2>Contact</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-details reveal">
            <div className="contact-item">
              <span aria-hidden="true">✉</span>
              <div>
                <span>Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
            </div>
            <button type="button" className="copy-btn" onClick={handleCopyEmail}>
              <span aria-hidden="true">{copied ? '✓' : '⧉'}</span>
              {copied ? 'Copied!' : 'Copy email'}
            </button>

            <div className="contact-item">
              <span aria-hidden="true">in</span>
              <div>
                <span>LinkedIn</span>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  {profile.linkedin}
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
            <div className="field-row">
              <div className="field-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  value={formValues.name}
                  onChange={(event) => handleChange('name', event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <small className="error-text">{errors.name}</small>}
              </div>

              <div className="field-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={formValues.email}
                  onChange={(event) => handleChange('email', event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email && <small className="error-text">{errors.email}</small>}
              </div>
            </div>

            <div className="field-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                value={formValues.subject}
                onChange={(event) => handleChange('subject', event.target.value)}
                aria-invalid={Boolean(errors.subject)}
              />
              {errors.subject && <small className="error-text">{errors.subject}</small>}
            </div>

            <div className="field-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                value={formValues.message}
                onChange={(event) => handleChange('message', event.target.value)}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <small className="error-text">{errors.message}</small>}
            </div>

            <button type="submit" className="primary-btn submit-btn">
              Send Message
            </button>
            {submitStatus && <p className="form-status">{submitStatus}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
