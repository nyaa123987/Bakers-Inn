import React from 'react';
import Button from './Buttons';

export default function ContactForm() {
  return (
    <section className="bg-white max-w-4xl mx-auto px-4 py-8">
      <form className=" flex flex-col justify-center space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select className="bg-[#F7F5E8] p-3 w-full text-[black]/50">
            <option>Your Title</option>
            <option>Mr</option>
            <option>Mrs</option>
            <option>Miss</option>
            <option>Dr</option>
          </select>
          <input
            type="text"
            placeholder="Your Name"
            className="bg-[#F7F5E8] p-3 w-full text-[black]/100"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Phone Number"
            className="bg-[#F7F5E8] p-3 w-full text-[black]"
          />
          <input
            type="email"
            placeholder="Your E-Mail"
            className="bg-[#F7F5E8] p-3 w-full text-[black]"
          />
        </div>
        <select className="bg-[#F7F5E8] p-3 w-full text-[black]/50">
          <option>Select Area Of Interest</option>
          <option>Products</option>
          <option>Services</option>
          <option>Other</option>
        </select>
        <input
          type="text"
          placeholder="Nature Of Enquiry"
          className="bg-[#F7F5E8] p-3 w-full text-[black]"
        />
        <select className="bg-[#F7F5E8] p-3 w-full text-[black]/50">
          <option>Do You Want To Be Contacted By Phone</option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <textarea
          placeholder="Your Message"
          rows={10}
          className="bg-[#F7F5E8] p-3 w-full text-[black]"
        />
        <Button>submit</Button>
      </form>
    </section>
  );
}
