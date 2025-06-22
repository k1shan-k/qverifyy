import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_h5614ri';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ApplicationData {
  projectName: string;
  website: string;
  email: string;
  description: string;
  launchDate: string;
  agreeToPublish: boolean;
}

export const sendApplicationEmail = async (data: ApplicationData): Promise<void> => {
  try {
    // Prepare template parameters
    const templateParams = {
      project_name: data.projectName,
      website: data.website,
      contact_email: data.email,
      description: data.description,
      launch_date: data.launchDate,
      agree_to_publish: data.agreeToPublish ? 'Yes' : 'No',
      submission_date: new Date().toLocaleString(),
      to_email: 'contact@qverify.org', // Your receiving email
    };

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    if (response.status !== 200) {
      throw new Error(`EmailJS failed with status: ${response.status}`);
    }

    console.log('Email sent successfully:', response);
  } catch (error: any) {
    console.error('EmailJS error:', error);
    throw new Error(`Failed to send email: ${error.message || 'Unknown error'}`);
  }
};

// Test EmailJS configuration
export const testEmailJSConnection = async (): Promise<{ success: boolean; message: string }> => {
  try {
    // Check if required environment variables are set
    if (!EMAILJS_SERVICE_ID || EMAILJS_SERVICE_ID === 'your_service_id') {
      return {
        success: false,
        message: 'EmailJS Service ID not configured. Please set VITE_EMAILJS_SERVICE_ID in your environment variables.'
      };
    }

    if (!EMAILJS_TEMPLATE_ID || EMAILJS_TEMPLATE_ID === 'your_template_id') {
      return {
        success: false,
        message: 'EmailJS Template ID not configured. Please set VITE_EMAILJS_TEMPLATE_ID in your environment variables.'
      };
    }

    if (!EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY === 'your_public_key') {
      return {
        success: false,
        message: 'EmailJS Public Key not configured. Please set VITE_EMAILJS_PUBLIC_KEY in your environment variables.'
      };
    }

    return {
      success: true,
      message: 'EmailJS configuration appears to be valid.'
    };
  } catch (error: any) {
    return {
      success: false,
      message: `EmailJS configuration error: ${error.message}`
    };
  }
};