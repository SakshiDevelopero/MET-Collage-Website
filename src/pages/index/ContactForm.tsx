import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import {
  User,
  Mail,
  Phone,
  Edit3,
  Send,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail as MailIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting MET Bhujbal Knowledge City. We'll get back to you soon.",
          variant: "default",
          // Position the toast at the bottom
          className: "top-2 left-2 bottom-auto right-auto fixed max-w-xs bg-white text-red-900 shadow-red-800/50",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : 'Failed to send message. Please try again later.',
        variant: "destructive",
        // Position the toast at the bottom
        className: "top-2 left-2 bottom-auto right-auto fixed max-w-xs bg-white text-red-900 shadow-red-800/50",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-[#fff5f5]">
      <h2 className="text-3xl font-bold text-center mb-14 text-[#800000]">
        CONTACT US
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 justify-center max-w-[90rem] mx-auto">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ scale: 1.02 }}
          className="flex-1 min-w-[300px] max-w-[800px]"
        >
          <Card
            className="shadow-lg border border-[#800000] hover:shadow-2xl transition-shadow duration-300 rounded-xl"
            style={{ boxShadow: "0 0 10px rgba(128, 0, 0, 0.2)" }}
          >
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-[#800000] mb-6 flex items-center">
                <MessageCircle className="h-5 w-5 mr-2" /> Send Us a Message
              </h3>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-[#800000]">
                      <User className="h-4 w-4 mr-2" /> Your Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="border-[#800000] focus:border-[#800000] focus:ring-1 focus:ring-[#800000]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-[#800000]">
                      <Mail className="h-4 w-4 mr-2" /> Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="border-[#800000] focus:border-[#800000] focus:ring-1 focus:ring-[#800000]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-[#800000]">
                      <Phone className="h-4 w-4 mr-2" /> Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone"
                      required
                      className="border-[#800000] focus:border-[#800000] focus:ring-1 focus:ring-[#800000]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-[#800000]">
                      <Edit3 className="h-4 w-4 mr-2" /> Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter subject"
                      required
                      className="border-[#800000] focus:border-[#800000] focus:ring-1 focus:ring-[#800000]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#800000]">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Your message here..."
                    required
                    className="border-[#800000] focus:border-[#800000] focus:ring-1 focus:ring-[#800000] resize-none"
                  />
                </div>

                <div className="text-center pt-2">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="bg-[#800000] hover:bg-[#660000] text-white font-semibold px-8 py-2 rounded-md"
                  >
                    {loading ? (
                      <span className="inline-flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="inline-flex items-center">
                        <Send className="h-4 w-4 mr-1" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center gap-6 pt-4">
                  <a
                    href="https://www.facebook.com/share/12KYUJmXyM5/?mibextid=qi2Omg"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="text-[#800000] hover:scale-110 transition-transform" />
                  </a>

                  <a
                    href="https://x.com/BhujbalMet?t=g8Cwvbz4jxvYiOvEoI3WxQ&s=08"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://cdn.simpleicons.org/x/800000"
                      alt="X"
                      className="w-6 h-6 hover:scale-110 transition-transform"
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/metbhujbalknowledgecity?igsh=ZHIwcTE4c29rMmp3"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="text-[#800000] hover:scale-110 transition-transform" />
                  </a>

                  <a
                    href="https://in.linkedin.com/company/met-s-institute-of-management-nashik"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="text-[#800000] hover:scale-110 transition-transform" />
                  </a>

                  <a
                    href="https://youtube.com/@metiom?si=xJdHvF4g2R28zQ6v"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    <Youtube className="text-[#800000] hover:scale-110 transition-transform" />
                  </a>

                  <a
                    href="mailto:enquiries@bkc.met.edu"
                    target="_self"
                    rel="noopener noreferrer"
                  >
                    <MailIcon className="text-[#800000] hover:scale-110 transition-transform" />
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          whileHover={{ scale: 1.02 }}
          className="flex-1 min-w-[300px] max-w-[800px]"
        >
          <div
            className="w-full h-[550px] rounded-xl overflow-hidden border border-[#800000] shadow-md transition-shadow duration-300"
            style={{ boxShadow: "0 0 10px rgba(128, 0, 0, 0.2)" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1695.980950568557!2d73.84892523496545!3d20.040391292196333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddc153ab0bced9%3A0x82b5a7b3c3a6562c!2sBhujbal%20Academy%20of%20Science%20%26%20Commerce%2CBhujbal%20Knowledge%20City%2C%20Adgaon%2C%20Nasik!5e1!3m2!1sen!2sin!4v1744049413962!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Bhujbal Academy Location"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;