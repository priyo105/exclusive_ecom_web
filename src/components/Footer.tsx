import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 px-4">
        {/* About section */}
        <div className="flex-1 mb-8 md:mb-0">
          <h2 className="text-2xl font-extrabold mb-2">Blue Market</h2>
          <p className="text-gray-400 text-sm max-w-xs">
            Blue Market is your one-stop e-commerce platform for top-rated products, exclusive deals, and a seamless shopping experience. Shop with confidence and enjoy fast delivery, secure payments, and dedicated support.
          </p>
        </div>
        {/* Quick links */}
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
          </ul>
        </div>
        {/* App download section */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-4 mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Get our app</h3>
          <div className="flex gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/playstore.png" alt="Get it on Google Play" className="h-12 w-auto" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/appstore.png" alt="Download on the App Store" className="h-12 w-auto" />
            </a>
          </div>
        </div>
        {/* Payment methods section */}
        <div className="flex-1 flex flex-col items-center md:items-end gap-4">
          <h3 className="text-lg font-bold mb-2">We accept</h3>
          <div className="flex gap-4">
            <img src="/visa.png" alt="Visa" className="h-8 w-auto" />
            <img src="/mastercard.png" alt="MasterCard" className="h-8 w-auto" />
            <img src="/amex.png" alt="Amex" className="h-8 w-auto" />
            <img src="/paypal.png" alt="PayPal" className="h-8 w-auto" />
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Blue Market. All rights reserved.
      </div>
    </footer>
  );
}
