export default function Table() {
  const depots = [
    { depot: "Chinhoyi Depot", address: "94/95 Josiah Tongogara St, Industrial Site, Chinhoyi", phone: "0772 318 309" },
    { depot: "Bindura Depot", address: "461 Luton Road, Industrial Site, Bindura", phone: "066 2107317" },
    { depot: "Murehwa Depot", address: "Stand number 351 Murehwa Growth Point", phone: "0652 122 514" },
    { depot: "Mutare Depot", address: "5-7 Glasgow Road, Industrial Site, Mutare", phone: "020 60715" },
    { depot: "Hwange Depot", address: "29 Derby Drive, Hwange Industrial Site", phone: "0281 2820105" },
    { depot: "Chiredzi Depot", address: "329 Lion Drive, Chiredzi", phone: "0231 231 2709" },
    { depot: "Masvingo Depot", address: "1310 Mineral Road, Masvingo", phone: "039 266 333" },
    { depot: "Gweru Depot", address: "1843 Main Street, Gweru", phone: "054 2220 858" },
    { depot: "Zvishavane Depot", address: "Shabanie Mine Club, Noeville, Zvishavane", phone: "0772 395567" },
  ];

  return (
    <section className="bg-white px-[2%] md:px-[3%] py-8 text-[#261B6C]">
      <div className="overflow-x-auto">
        <table className="min-w-full table-fixed border-collapse">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="w-1/4 px-4 py-2 border-r border-gray-300 text-left font-semibold">Depot</th>
              <th className="w-1/2 px-4 py-2 border-r border-gray-300 text-left font-semibold">Address</th>
              <th className="w-1/4 px-4 py-2 text-left font-semibold">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {depots.map((item, idx) => (
              <>
                <tr
                  key={idx}
                >
                  <td className="px-4 py-2 border-r border-gray-200 font-semibold align-top">{item.depot}</td>
                  <td className="px-4 py-2 border-r border-gray-200 align-top">{item.address}</td>
                  <td className="px-4 py-2 font-semibold align-top">{item.phone}</td>
                </tr>

                {idx === 3 && (
                  <tr key={`spacer-${idx}`}>
                    <td colSpan={3} className="py-2"></td>
                  </tr>
                )}
              </>
            ))}
          </tbody>

        </table>
      </div>
    </section>
  );
}
