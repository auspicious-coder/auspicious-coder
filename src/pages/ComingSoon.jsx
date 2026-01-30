import { useState, useEffect } from 'react';
import Button from '../components/UI/Button';
import Loader from '../components/UI/Loader';

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const launchDate = new Date('2024-06-01T00:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const TimeBox = ({ value, label }) => (
    <div className="text-center">
      <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 to-accent bg-clip-text text-transparent">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-2">
        {label}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-dark-bg dark:to-gray-900 p-6">
      <div className="text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-accent rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-2xl">AC</span>
          </div>
          <span className="text-3xl font-bold gradient-text">Auspicious Coders</span>
        </div>

        {/* Main Content */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Something{' '}
          <span className="gradient-text">Amazing</span>{' '}
          is Coming Soon
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          We're working hard to bring you an incredible new experience. 
          Our website is under construction, but we'll be launching very soon!
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Minutes" />
          <TimeBox value={timeLeft.seconds} label="Seconds" />
        </div>

        {/* Notify Form */}
        <div className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-xl max-w-md mx-auto mb-12">
          <h3 className="text-xl font-bold mb-4">Get Notified When We Launch</h3>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <Button type="submit" className="w-full">
              Notify Me
            </Button>
          </form>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            We'll send you an email when we're ready. No spam, promise!
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            Have urgent inquiries? Contact us at:
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6">
            <a 
              href="mailto:hello@auspiciouscoders.com"
              className="text-primary-600 dark:text-primary-400 font-semibold hover:underline"
            >
              ✉️ hello@auspiciouscoders.com
            </a>
            <a 
              href="tel:+15551234567"
              className="text-primary-600 dark:text-primary-400 font-semibold hover:underline"
            >
              📞 +1 (555) 123-4567
            </a>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-12">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Development Progress</span>
            <span>85%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary-600 to-accent h-2 rounded-full"
              style={{ width: '85%' }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;