export default function DonationRequestForm() {
  return (
    <div className="flex flex-col gap-3 text-[14px] md:text-[16px]">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-1">Request Product Donations</h2>
      <p className="text-[12px] text-gray-600 text-center mb-2">
        You can apply for product donations by completing this form, we will contact you should your application be successful.
        Please bear in mind that we will need at least 3 weeks’ notice to the date of your event.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input className="p-2 border rounded" placeholder="Name of Organisation" />
        <input className="p-2 border rounded" placeholder="Name of Contact Person" />
        <input className="p-2 border rounded" placeholder="Contact Person Position" />
        <input className="p-2 border rounded" placeholder="Organization Address" />
        <input className="p-2 border rounded" placeholder="Contact Person’s Telephone" />
        <input className="p-2 border rounded" placeholder="Contact Person’s E-mail" />
        <input type="date" className="p-2 border rounded" placeholder="Date of Event" />
        <select className="p-2 border rounded">
          <option>Intended Use of Donation</option>
          <option>Community Event</option>
          <option>School Function</option>
          <option>Charity</option>
          <option>Other</option>
        </select>
        <select className="p-2 border rounded">
          <option>Number of Attendants</option>
          <option>1-50</option>
          <option>51-100</option>
          <option>101-200</option>
          <option>200+</option>
        </select>
        <select className="p-2 border rounded">
          <option>What Product Are You Specifically Looking For?</option>
          <option>Bread</option>
          <option>Confectionery</option>
          <option>Other</option>
        </select>
      </div>

      <button className="mt-3 bg-yellow-700 hover:bg-yellow-800 text-white py-2 px-4 rounded">
        PROCEED TO NEXT STEP
      </button>
    </div>
  );
}
