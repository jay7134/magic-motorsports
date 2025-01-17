import { useState } from "react";

const InspectionManagement = () => {
  const [inspections, setInspections] = useState([
    { id: 1, car: "Car A", status: "PROCESSING" },
    { id: 2, car: "Car B", status: "COMPLETED" },
  ]);

  const changeStatus = (id, status) => {
    setInspections(
      inspections.map((inspection) =>
        inspection.id === id ? { ...inspection, status } : inspection
      )
    );
  };

  return (
    <div className="container">
      <h1 className="text-black text-[26px] font-[600] py-[15px]">Inspection Management</h1>
      <div className="container mx-auto">
      <div className="overflow-x-auto my-[20px]">
        <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-3 py-3 border-b border-gray-200 text-left uppercase">Car</th>
            <th className="px-3 py-3 border-b border-gray-200 text-left uppercase">Status</th>
            <th className="px-3 py-3 border-b border-gray-200 text-left uppercase">Actions</th>
          </tr>
        </thead>
        <tbody>
          {inspections.map((inspection) => (
            <tr key={inspection.id} className="odd:bg-white even:bg-gray-50">
              <td className="px-3 py-3 border-b border-gray-200 text-[14px]">{inspection.car}</td>
              <td className="px-3 py-3 border-b border-gray-200 text-[14px]">{inspection.status}</td>
              <td className="px-3 py-3 border-b border-gray-200 text-[14px] text-left">
                <div className="space-x-4 flex flex-row py-1">
                  <button
                    className="border border-slate-500 p-2 px-3 rounded-[8px] text-black font-[400] hover:bg-black hover:text-white"
                    onClick={() => changeStatus(inspection.id, "PROCESSING")}
                  >
                    Set Processing
                  </button>
                  <button
                    className="bg-green-500 border border-green-500 p-2 px-3 rounded-[8px] text-white font-[400] hover:bg-black hover:text-white hover:border-black"
                    onClick={() => changeStatus(inspection.id, "COMPLETED")}
                  >
                    Set Completed
                  </button>
                  <button
                    className="bg-red-500 border border-red-500 p-2 px-3 rounded-[8px] text-white font-[400] hover:bg-black hover:text-white hover:border-black"
                    onClick={() => changeStatus(inspection.id, "CANCELLED")}
                  >
                    Set Cancelled
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </div>
  );
};

export default InspectionManagement;
