'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Send, AlertCircle } from 'lucide-react';
import CtaSection from '@/components/Ctasectionl';

interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, type, value, onChange, required = true }) => (
  <motion.div
    className="mb-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <label className="block mb-2 text-orange-500 font-sans" htmlFor={id}>
      {label}
    </label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
      required={required}
    />
  </motion.div>
);

interface TextAreaFieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ label, id, value, onChange, required = true }) => (
  <motion.div
    className="mb-6"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <label className="block mb-2 text-orange-500 font-sans" htmlFor={id}>
      {label}
    </label>
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
      rows={4}
      required={required}
    ></textarea>
  </motion.div>
);

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="mb-4 border-b border-gray-700 font-sans pb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-orange-500">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRight className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            className="mt-2 text-gray-300"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mailtoLink = `mailto:team@eagles.wtf?subject=Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0AReason: ${reason}%0AComment: ${comment}`;
    window.location.href = mailtoLink;
    
    setSubmitStatus('success');
    setIsSubmitting(false);
  };

  return (
    <>
      <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl font-thin mb-8 text-center text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get in Touch with Eagles
          </motion.h1>
          <motion.p
            className="mb-12 text-xl text-center font-sans text-gray-300"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We&#39;re here to help! Fill out the form below, and our team will get back to you as soon as possible.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.form
              onSubmit={handleSubmit}
              className="bg-gray-900 p-8 rounded-lg shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <InputField
                label="Name"
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <InputField
                label="Email"
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label className="block mb-2 text-orange-500 font-sans" htmlFor="reason">
                  Reason for Contact
                </label>
                <select
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  required
                >
                  <option value="">Select a reason</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Partnership Opportunities">Partnership Opportunities</option>
                  <option value="Support">Support</option>
                  <option value="Feedback">Feedback</option>
                </select>
              </motion.div>
              <TextAreaField
                label="Comment"
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <motion.button
                type="submit"
                className="w-full bg-orange-500 font-sans text-black font-bold py-3 px-6 rounded-lg hover:bg-orange-600 transition flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <motion.div
                    className="w-6 h-6 border-4 border-black border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  <>
                    Send Message <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </motion.button>
              {submitStatus === 'success' && (
                <motion.p
                  className="mt-4 text-green-500 flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle className="mr-2" /> Message sent successfully!
                </motion.p>
              )}
            </motion.form>
            
            <motion.div
              className="bg-gray-900 p-8 rounded-lg shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 font-sans">Frequently Asked Questions</h2>
              <FAQItem
                question="What is Eagles?"
                answer="Eagles is a meme coin in the cryptocurrency space, aiming to create a strong community with growth potential."
              />
              <FAQItem
                question="How can I get involved with Eagles?"
                answer="You can join our community on Telegram, stay updated on Twitter, and keep an eye out for future announcements!"
              />
              <FAQItem
                question="Where can I buy Eagles tokens?"
                answer="Eagles tokens are available on several major exchanges. Check our official website for the latest information."
              />
            </motion.div>
          </div>
        </div>
      </div>
      <CtaSection />
    </>
  );
};

export default ContactPage;
