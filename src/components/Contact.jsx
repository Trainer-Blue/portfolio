/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

import './Contact.css';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "3em",
  },
  form: {
    width: '100%',
  },
  formfield: {
    width: '100%',
    marginBottom: '2rem',
  },
}));

const Contact = () => {
  const classes = useStyles();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nfv8t0w', 'template_s2yzuv5', form.current, 'DjXjOqrdkG5vOzkGv')
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Message sent successfully!',
          text: 'I\'ll get back to you shortly.',
          showConfirmButton: false,
          timer: 2000
        });
        e.target.reset();
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Please try again later.',
        });
      });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-16 px-8 md:px-12 lg:px-16 text-white">
      <div className="max-w-5xl w-full backdrop-blur-[2px] rounded-2xl p-10 md:p-16 shadow-xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center gradient-text leading-relaxed">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left column - Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl text-center font-semibold text-purple-300">Send Me A Message</h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-gray-800 bg-opacity-50 rounded-lg border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 px-4 py-3 text-white outline-none transition-colors duration-200"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-gray-800 bg-opacity-50 rounded-lg border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 px-4 py-3 text-white outline-none transition-colors duration-200"
                  placeholder="johndoe@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full bg-gray-800 bg-opacity-50 rounded-lg border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 px-4 py-3 text-white outline-none transition-colors duration-200 resize-none"
                  placeholder="Hello, I'd like to connect about..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Send Message
              </button>
            </form>
          </div>
          
          {/* Right column - Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-purple-300 mb-4">Let's Connect</h3>
              <p className="text-lg leading-relaxed">
                Feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;