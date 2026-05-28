import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    vehicle: '',
    service: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      // Reset form when closed
      if (status === 'success') {
        setTimeout(() => {
          setStatus('idle');
          setFormData({ firstName: '', lastName: '', phone: '', email: '', vehicle: '', service: '' });
        }, 300);
      }
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // We use /exec instead of /dev so it works for the public!
      const WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbwGUHmvbFi_J5cRJprah4q3t-VAbNsnTLjsjvaKajvF8587IjAOYgY1ar4uv_8OLsPc/exec';
      
      const params = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => params.append(key, value));

      // Using no-cors bypasses browser CORS policies for simple form submissions
      await fetch(WEBAPP_URL, {
        method: 'POST',
        body: params,
        mode: 'no-cors'
      });

      setStatus('success');
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-don-ink/90 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="relative bg-don-oat w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 sm:p-12 shadow-2xl"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-2xl text-don-ink hover:text-don-red transition-colors leading-none"
            aria-label="Close"
          >
            &times;
          </button>
          
          {status !== 'success' && (
            <div className="mb-10 text-center">
              <h2 className="text-4xl md:text-5xl font-display uppercase tracking-[-1px] text-don-ink mb-2">Request a Quote</h2>
              <p className="text-don-clay text-sm mb-8">Fill out the form below and we'll get back to you with an estimate.</p>
            </div>
          )}

          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-don-red rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-don-oat" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-display uppercase tracking-[-1px] text-don-ink mb-2">Request Sent</h3>
              <p className="text-don-clay mb-8">We've received your information and will contact you shortly to finalize your quote.</p>
              <button 
                onClick={onClose}
                className="bg-don-ink text-don-oat text-sm font-bold uppercase tracking-[0.2em] px-8 py-4 rounded hover:bg-don-ink/90 transition-colors"
              >
                Close
              </button>
            </motion.div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-don-clay">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-don-ink/20 py-2 text-don-ink focus:outline-none focus:border-don-red transition-colors rounded-none"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-don-clay">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-don-ink/20 py-2 text-don-ink focus:outline-none focus:border-don-red transition-colors rounded-none"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-don-clay">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-don-ink/20 py-2 text-don-ink focus:outline-none focus:border-don-red transition-colors rounded-none"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-don-clay">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-don-ink/20 py-2 text-don-ink focus:outline-none focus:border-don-red transition-colors rounded-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-don-clay">Vehicle (Year, Make, Model)</label>
                <input 
                  type="text" 
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-don-ink/20 py-2 text-don-ink focus:outline-none focus:border-don-red transition-colors rounded-none"
                  placeholder="2021 Toyota Tacoma"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-don-clay">Service</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-don-ink/20 py-2 text-don-ink focus:outline-none focus:border-don-red transition-colors rounded-none appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a service...</option>
                  <option value="Interior & Exterior Detail">Interior & Exterior Detail</option>
                  <option value="Interior Detail">Interior Detail</option>
                  <option value="Exterior Detail">Exterior Detail</option>
                  <option value="Ceramic Coating">Ceramic Coating</option>
                  <option value="Paint Correction">Paint Correction</option>
                  <option value="Boat Detailing">Boat Detailing</option>
                  <option value="RV Detailing">RV Detailing</option>
                  <option value="Other / Not Sure">Other / Not Sure</option>
                </select>
              </div>

              {status === 'error' && (
                <p className="text-don-red text-sm font-bold">There was an error submitting your request. Please try again or call us.</p>
              )}

              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="w-full bg-don-red text-don-oat text-sm font-bold uppercase tracking-[0.2em] py-4 rounded hover:bg-don-red/90 transition-colors mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
