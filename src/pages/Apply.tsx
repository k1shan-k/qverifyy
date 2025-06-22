import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { sendApplicationEmail, testEmailJSConnection, type ApplicationData } from '../lib/emailjs';
import { CheckCircle, Clock, FileText, AlertTriangle, Mail } from 'lucide-react';

const Apply = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'checking' | 'connected' | 'error'>('checking');
  const [connectionError, setConnectionError] = useState<string>('');
  const [formData, setFormData] = useState({
    projectName: '',
    website: '',
    email: '',
    description: '',
    launchDate: '',
    agreeToPublish: false,
  });

  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    try {
      const result = await testEmailJSConnection();
      if (result.success) {
        setConnectionStatus('connected');
        setConnectionError('');
      } else {
        setConnectionStatus('error');
        setConnectionError(result.message);
      }
    } catch (error: any) {
      setConnectionStatus('error');
      setConnectionError('Unable to verify email service configuration. Please try again later.');
      console.error('EmailJS connection test error:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (connectionStatus !== 'connected') {
      toast.error('Email service is currently unavailable. Please try again later.');
      return;
    }

    setIsSubmitting(true);

    try {
      const applicationData: ApplicationData = {
        projectName: formData.projectName,
        website: formData.website,
        email: formData.email,
        description: formData.description,
        launchDate: formData.launchDate,
        agreeToPublish: formData.agreeToPublish,
      };

      console.log('Submitting application via email:', applicationData);

      await sendApplicationEmail(applicationData);

      console.log('Application submitted successfully via email');
      
      toast.success('Application submitted successfully! We\'ll be in touch within 5 business days.');
      
      // Reset form
      setFormData({
        projectName: '',
        website: '',
        email: '',
        description: '',
        launchDate: '',
        agreeToPublish: false,
      });

      // Redirect after a delay
      setTimeout(() => navigate('/'), 3000);
      
    } catch (error: any) {
      console.error('Error submitting application:', error);
      
      if (error.message?.includes('network') || error.message?.includes('fetch')) {
        toast.error('Network error. Please check your connection and try again.');
      } else if (error.message?.includes('Failed to fetch')) {
        toast.error('Connection error. Please check your internet connection and try again.');
      } else {
        toast.error(error.message || 'Failed to submit application. Please try again or contact support directly.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  // Show connection status
  if (connectionStatus === 'checking') {
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Checking email service...</p>
        </div>
      </div>
    );
  }

  if (connectionStatus === 'error') {
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-red-900 mb-2">Email Service Configuration Required</h2>
            <p className="text-red-700 mb-4">{connectionError}</p>
            <div className="bg-white rounded-lg p-4 mb-4 text-left">
              <h3 className="font-semibold text-gray-900 mb-2">To set up EmailJS:</h3>
              <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                <li>Create an account at <a href="https://emailjs.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">emailjs.com</a></li>
                <li>Create an email service (Gmail, Outlook, etc.)</li>
                <li>Create an email template with the following variables:
                  <ul className="list-disc list-inside ml-4 mt-1 text-xs">
                    <li>project_name, website, contact_email</li>
                    <li>description, launch_date, agree_to_publish</li>
                    <li>submission_date, to_email</li>
                  </ul>
                </li>
                <li>Add your EmailJS credentials to environment variables:
                  <ul className="list-disc list-inside ml-4 mt-1 text-xs">
                    <li>VITE_EMAILJS_SERVICE_ID</li>
                    <li>VITE_EMAILJS_TEMPLATE_ID</li>
                    <li>VITE_EMAILJS_PUBLIC_KEY</li>
                  </ul>
                </li>
              </ol>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={checkConnection}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
              <a
                href="mailto:contact@qverify.org?subject=Certification Application&body=Please include your project details here."
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-center" />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Start Your Qverify Certification</h1>
          <p className="text-xl text-gray-600">
            Tell us a little about your project, and we'll get back to you within 5 business days.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-2">
                Project Name *
              </label>
              <input
                type="text"
                name="projectName"
                id="projectName"
                value={formData.projectName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
                disabled={isSubmitting}
                placeholder="Enter your project name"
              />
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                Website / Repository Link *
              </label>
              <input
                type="url"
                name="website"
                id="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
                disabled={isSubmitting}
                placeholder="https://your-project.com"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Contact Email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
                disabled={isSubmitting}
                placeholder="contact@your-project.com"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Brief Description of Crypto Stack *
              </label>
              <textarea
                name="description"
                id="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
                disabled={isSubmitting}
                placeholder="Describe your cryptographic implementation, algorithms used, and any post-quantum features..."
              />
            </div>

            <div>
              <label htmlFor="launchDate" className="block text-sm font-medium text-gray-700 mb-2">
                Estimated Launch Date *
              </label>
              <input
                type="date"
                name="launchDate"
                id="launchDate"
                value={formData.launchDate}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
                disabled={isSubmitting}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  name="agreeToPublish"
                  id="agreeToPublish"
                  checked={formData.agreeToPublish}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="agreeToPublish" className="font-medium text-gray-700">
                  I agree to share my audit findings publicly *
                </label>
                <p className="text-gray-500 mt-1">
                  This helps maintain transparency and trust in the ecosystem. All results, whether certified or not, will be published.
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              disabled={isSubmitting || connectionStatus !== 'connected'}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending Application...
                </span>
              ) : (
                'Submit Application'
              )}
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-100">
                  <Clock className="h-5 w-5 text-indigo-600" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Initial Review (5 business days)</h3>
                <p className="text-gray-600 mt-1">
                  Our team will review your application and determine if your project meets our pre-qualification criteria. We'll contact you with next steps or additional questions.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-100">
                  <FileText className="h-5 w-5 text-indigo-600" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Technical Questionnaire</h3>
                <p className="text-gray-600 mt-1">
                  If pre-qualified, you'll receive our detailed technical questionnaire covering cryptographic implementations, security practices, and architecture details.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-100">
                  <CheckCircle className="h-5 w-5 text-indigo-600" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Audit Kickoff</h3>
                <p className="text-gray-600 mt-1">
                  Once the questionnaire is complete and payment is processed, we'll begin the comprehensive audit process. Timeline is typically 4-6 weeks depending on project complexity.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Questions?</h4>
            <p className="text-blue-800 text-sm">
              If you have any questions about the application process or certification requirements, 
              feel free to <a href="/contact" className="underline hover:text-blue-600">contact our team</a> before submitting your application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;