import { useState } from "react";

const PurchaseManagement = () => {
  const [users, setUsers] = useState([
    { id: "1", name: "Griffin Rogers" },
    { id: "2", name: "Jane Doe" },
  ]);

  const [purchases, setPurchases] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [purchaseForm, setPurchaseForm] = useState({
    carId: "",
    payment: "",
    vin: "",
    purchaseDate: "",
    invoice: "",
  });

  const [selectedPurchaseId, setSelectedPurchaseId] = useState(null);
  const [shippingDetail, setShippingDetail] = useState({
    shipName: "",
    pickupPort: "",
    deliveryPort: "",
    estimatedPickupDate: "",
    estimatedArrivalDate: "",
  });
  const [statusUpdate, setStatusUpdate] = useState("");

  // Add a new purchase
  const handleAddPurchase = () => {
    if (!selectedUserId || !purchaseForm.carId || !purchaseForm.payment) {
      alert("Please fill out all required fields.");
      return;
    }

    const newPurchase = {
      id: purchases.length + 1,
      userId: selectedUserId,
      ...purchaseForm,
      status: "Booking Vessel",
      shippingDetail: null,
      transportDetail: {},
    };

    setPurchases([...purchases, newPurchase]);
    setPurchaseForm({
      carId: "",
      payment: "",
      vin: "",
      purchaseDate: "",
      invoice: "",
    });
    setSelectedUserId("");
  };

  // Update purchase status
  const updatePurchaseStatus = (id) => {
    setPurchases(
      purchases.map((purchase) =>
        purchase.id === id
          ? {
              ...purchase,
              status: statusUpdate,
              transportDetail: {
                ...purchase.transportDetail,
                [statusUpdate]: new Date().toISOString().split("T")[0],
              },
            }
          : purchase
      )
    );
    setStatusUpdate("");
    setSelectedPurchaseId(null);
  };

  // Add shipping details to a purchase
  const addShippingDetails = () => {
    setPurchases(
      purchases.map((purchase) =>
        purchase.id === selectedPurchaseId
          ? { ...purchase, shippingDetail }
          : purchase
      )
    );
    setShippingDetail({
      shipName: "",
      pickupPort: "",
      deliveryPort: "",
      estimatedPickupDate: "",
      estimatedArrivalDate: "",
    });
    setSelectedPurchaseId(null);
  };

  return (
    <div className="container">
      <h1 className="text-black text-[26px] font-[600] py-[15px]">Purchase Management</h1>

      {/* Form for Adding Purchase */}
      <div>
        <h2 className="text-black text-[18px] font-[500] py-[15px]">Add Purchase</h2>
        <form
          className="form-container space-y-4 max-w-[500px] w-full"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddPurchase();
          }}
        >
          <div className="flex flex-col md:flex-row gap-[5px] md:gap-[20px] md:items-center my-4">
            <label className="text-left text-[14px] text-black font-[500] md:w-4/12">Select User</label>
            <select
              className="text-[14px] font-[400] block bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
              value={selectedUserId}
              onChange={(e) => setSelectedUserId(e.target.value)}
            >
              <option className="text-[14px] font-[400] text-black" value="">Select User</option>
              {users.map((user) => (
                <option 
                  className="text-[14px] font-[400] text-black"
                  key={user.id} 
                  value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col md:flex-row gap-[5px] md:gap-[20px] md:items-center my-4">
            <label className="text-left text-[14px] text-black font-[500] md:w-4/12">Car ID</label>
            <input
              type="text"
              className="w-full text-[14px] font-[400] bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
              value={purchaseForm.carId}
              onChange={(e) =>
                setPurchaseForm({ ...purchaseForm, carId: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col md:flex-row gap-[5px] md:gap-[20px] md:items-center my-4">
            <label className="text-left text-[14px] text-black font-[500] md:w-4/12">Payment</label>
            <input
              type="number"
              className="w-full text-[14px] font-[400] bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
              value={purchaseForm.payment}
              onChange={(e) =>
                setPurchaseForm({ ...purchaseForm, payment: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col md:flex-row gap-[5px] md:gap-[20px] md:items-center my-4">
            <label className="text-left text-[14px] text-black font-[500] md:w-4/12">VIN</label>
            <input
              type="text"
              className="w-full text-[14px] font-[400] bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
              value={purchaseForm.vin}
              onChange={(e) =>
                setPurchaseForm({ ...purchaseForm, vin: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col md:flex-row gap-[5px] md:gap-[20px] md:items-center my-4">
            <label className="text-left text-[14px] text-black font-[500] md:w-4/12">Purchase Date</label>
            <input
              type="date"
              className="w-full text-[14px] font-[400] bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
              value={purchaseForm.purchaseDate}
              onChange={(e) =>
                setPurchaseForm({ ...purchaseForm, purchaseDate: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col md:flex-row gap-[5px] md:gap-[20px] md:items-center my-4">
            <label className="text-left text-[14px] text-black font-[500] md:w-4/12">Invoice (URL)</label>
            <input
              type="text"
              className="w-full text-[14px] font-[400] bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
              value={purchaseForm.invoice}
              onChange={(e) =>
                setPurchaseForm({ ...purchaseForm, invoice: e.target.value })
              }
            />
          </div>
          <div className="space-x-4 flex flex-row py-4">
            <button className="bg-black border border-black px-3 py-2 rounded-[8px] text-[14px] text-white font-[400]" type="submit">
              Add Purchase
            </button>
          </div>
        </form>
      </div>

      {/* Display All Purchases */}
      {purchases && purchases.length > 0 && (
      <div>
      <h2 className="text-black text-[18px] font-[500] py-[15px]">All Purchases</h2>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-3 py-3 border-b border-gray-200 text-left uppercase">Car ID</th>
            <th className="px-3 py-3 border-b border-gray-200 text-left uppercase">Payment</th>
            <th className="px-3 py-3 border-b border-gray-200 text-left uppercase">VIN</th>
            <th className="px-3 py-3 border-b border-gray-200 text-left uppercase">Status</th>
            <th className="px-3 py-3 border-b border-gray-200 text-center uppercase">Actions</th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase) => (
            <tr key={purchase.id} className="odd:bg-white even:bg-gray-50">
              <td className="px-3 py-3 border-b border-gray-200 text-[14px]">{purchase.carId}</td>
              <td className="px-3 py-3 border-b border-gray-200 text-[14px]">${purchase.payment}</td>
              <td className="px-3 py-3 border-b border-gray-200 text-[14px]">{purchase.vin}</td>
              <td className="px-3 py-3 border-b border-gray-200 text-[14px]">{purchase.status}</td>
              <td className="px-3 py-3 border-b border-gray-200 text-[14px] text-center">
                <button
                  className="border border-slate-500 p-2 rounded-[8px] text-black font-[400] hover:bg-black hover:text-white"
                  onClick={() => setSelectedPurchaseId(purchase.id)}
                >
                  Manage
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      )}
      {/* Manage Selected Purchase */}
      {selectedPurchaseId && (
        <div className="px-3 py-3 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-black text-[18px] font-[500] pb-[5px]">Manage Purchase</h2>
          <hr/>
          <div className="form-container space-y-3 w-[500px]">
            <h3 className="text-black text-[16px] font-[500] pt-[10px]">Update Status</h3>
            <div className="flex flex-row justify-between gap-4">
            <input
              type="text"
              className="text-[14px] font-[400] bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px]"
              placeholder="Enter Status"
              value={statusUpdate}
              onChange={(e) => setStatusUpdate(e.target.value)}
            />
            <button
              className="min-w-[130px] bg-black border border-black px-3 rounded-[8px] text-[13px] text-white font-[400]"
              onClick={() => updatePurchaseStatus(selectedPurchaseId)}
            >
              Update Status
            </button>
            </div>
          </div>

          <div className="form-container space-y-4 w-[500px] pt-4">
            <h3 className="text-black text-[16px] font-[500] pt-[10px]">Add Shipping Details</h3>
            <hr/>
            <form className="form-container space-y-4 w-[500px]">
            <div className="flex items-center space-x-4">
              <label className="text-left text-[14px] text-black font-[500] w-3/12">Ship Name</label>
              <input
                type="text"
                className="w-full text-[14px] font-[400] bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
                value={shippingDetail.shipName}
                onChange={(e) =>
                  setShippingDetail({ ...shippingDetail, shipName: e.target.value })
                }
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-left text-[14px] text-black font-[500] w-3/12">Pickup Port</label>
              <input
                type="text"
                className="w-full text-[14px] font-[400] bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
                value={shippingDetail.pickupPort}
                onChange={(e) =>
                  setShippingDetail({ ...shippingDetail, pickupPort: e.target.value })
                }
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-left text-[14px] text-black font-[500] w-3/12">Delivery Port</label>
              <input
                type="text"
                className="w-full text-[14px] font-[400] bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
                value={shippingDetail.deliveryPort}
                onChange={(e) =>
                  setShippingDetail({
                    ...shippingDetail,
                    deliveryPort: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-left text-[14px] text-black font-[500] w-3/12">Estimated Pickup Date</label>
              <input
                type="date"
                className="w-full text-[14px] font-[400] bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
                value={shippingDetail.estimatedPickupDate}
                onChange={(e) =>
                  setShippingDetail({
                    ...shippingDetail,
                    estimatedPickupDate: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-left text-[14px] text-black font-[500] w-3/12">Estimated Arrival Date</label>
              <input
                type="date"
                className="w-full text-[14px] font-[400] bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
                value={shippingDetail.estimatedArrivalDate}
                onChange={(e) =>
                  setShippingDetail({
                    ...shippingDetail,
                    estimatedArrivalDate: e.target.value,
                  })
                }
              />
            </div>
            <div className="space-x-4 flex flex-row py-4">
              <button 
                className="bg-black border border-black px-3 py-2 rounded-[8px] text-[14px] text-white font-[400]" 
                onClick={addShippingDetails}>
                Save Shipping Details
              </button>
              <button
                className="border border-slate-500 px-4 py-2 rounded-[8px] text-[14px] text-black font-[400]"
                onClick={() => addShippingDetails(null)}
              >
                Cancel
              </button>
            </div>
          </form>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default PurchaseManagement;
