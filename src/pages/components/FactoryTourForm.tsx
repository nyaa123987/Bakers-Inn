export default function FactoryTourForm() {
  return (
    <div className="flex flex-col gap-3 text-[14px] md:text-[16px]">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-2">Book A Factory Tour</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input className="p-2 border rounded" placeholder="Name of Organisation" />
        <input className="p-2 border rounded" placeholder="Name of Contact Person" />
        <input className="p-2 border rounded" placeholder="Organization Address" />
        <input className="p-2 border rounded" placeholder="Organization’s Resident Town" />
        <input className="p-2 border rounded" placeholder="Contact Person’s Telephone" />
        <input className="p-2 border rounded" placeholder="Contact Person’s E-mail" />
        <input type="date" className="p-2 border rounded" placeholder="Date of Visit" />
        <select className="p-2 border rounded">
          <option>Number of Participants</option>
          <option>1-10</option>
          <option>11-20</option>
          <option>21-50</option>
          <option>50+</option>
        </select>
      </div>

      <select className="p-2 border rounded">
        <option>Age Range of Participants</option>
        <option>6-10</option>
        <option>11-15</option>
        <option>16-20</option>
        <option>21+</option>
      </select>

      <div className="text-[12px] text-gray-600 mt-2">
        <p>
          Plant Visit <a href="#" className="font-semibold underline">Terms & Conditions</a> | Plant Visit <a href="#" className="font-semibold underline">Safety Regulations</a>
        </p>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Your organisation has agreed to the submission...
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Have Read The Safety Regulations
        </label>
      </div>

      <button className="mt-3 bg-yellow-700 hover:bg-yellow-800 text-white py-2 px-4 rounded">SUBMIT</button>
    </div>
  );
}
