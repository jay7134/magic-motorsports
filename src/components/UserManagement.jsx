import { useState } from "react";

const UserManagement = () => {
  // Example data
  const [users, setUsers] = useState([
    {
      id: "1",
      addedByUserId: "0",
      firstName: "Griffin",
      lastName: "Rogers",
      email: "Griffinrogers503@gmail.com",
      verified: false,
      favoriteCars: [],
      createdAt: "2023-06-04T01:32:54.019Z",
      updatedAt: "2023-06-04T01:32:54.019Z",
    },
    {
      id: "2",
      addedByUserId: "0",
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@gmail.com",
      verified: true,
      favoriteCars: [],
      createdAt: "2023-07-04T01:32:54.019Z",
      updatedAt: "2023-07-04T01:32:54.019Z",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [editUserId, setEditUserId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    verified: false,
  });

  // Search functionality
  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle edit user
  const handleEditUser = (user) => {
    setEditUserId(user.id);
    setEditFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      verified: user.verified,
    });
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleSaveChanges = () => {
    setUsers(
      users.map((user) =>
        user.id === editUserId ? { ...user, ...editFormData } : user
      )
    );
    setEditUserId(null); // Exit edit mode
  };

  return (
    <div className="container">
      
      <h1 className="text-black text-[26px] font-[600] py-[15px]">User Management</h1>
      {/* Search Bar */}
      <input
        type="text"
        className="w-full text-[14px] font-[400] bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
        placeholder="Search by name or email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* User Table */}
      <div className="container mx-auto">
      <div className="overflow-x-auto my-[20px]">
        <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-3 py-3 border-b border-gray-200 text-left uppercase">First Name</th>
            <th className="px-3 py-3 border-b border-gray-200 text-left uppercase">Last Name</th>
            <th className="px-3 py-3 border-b border-gray-200 text-left uppercase">Email</th>
            <th className="px-3 py-3 border-b border-gray-200 text-left uppercase">Verified</th>
            <th className="px-3 py-3 border-b border-gray-200 uppercase text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} className="odd:bg-white even:bg-gray-50">
              <td className="px-3 py-3 border-b border-gray-200 text-[14px]">{user.firstName}</td>
              <td className="px-3 py-3 border-b border-gray-200 text-[14px]">{user.lastName}</td>
              <td className="px-3 py-3 border-b border-gray-200 text-[14px]">{user.email}</td>
              <td className="px-3 py-3 border-b border-gray-200 text-[14px]">{user.verified ? "True" : "False"}</td>
              <td className="px-3 py-3 border-b border-gray-200 text-[14px] text-center">
                <button
                  className="border border-slate-500 p-2 rounded-[8px] text-black font-[400] hover:bg-black hover:text-white"
                  onClick={() => handleEditUser(user)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>

      {/* Edit Form Modal */}
      {editUserId && (
        <div className="px-3 py-3 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-black text-[18px] font-[500] py-[15px]">Edit User</h2>
          <form className="form-container space-y-4 w-[500px]">
            <div className="flex items-center space-x-4">
              <label className="text-left text-[14px] text-black font-[500] w-3/12">First Name</label>
              <input
                type="text"
                className="w-full text-[14px] font-[400] bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
                name="firstName"
                value={editFormData.firstName}
                onChange={handleEditFormChange}
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-left text-[14px] text-black font-[500] w-3/12">Last Name</label>
              <input
                type="text"
                className="w-full text-[14px] font-[400] bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
                name="lastName"
                value={editFormData.lastName}
                onChange={handleEditFormChange}
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-left text-[14px] text-black font-[500] w-3/12">Email</label>
              <input
                type="email"
                className="w-full text-[14px] font-[400] bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
                name="email"
                value={editFormData.email}
                onChange={handleEditFormChange}
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="text-left text-[14px] text-black font-[500] w-3/12">Verified</label>
              <select
                className="text-[14px] font-[400] block bg-transparent border boreder-[1px] border-[#e5e7eb] w-full outline-none text-black py-2 px-2 rounded-[8px] mt-[5px]"
                name="verified"
                value={editFormData.verified}
                onChange={(e) =>
                  setEditFormData({
                    ...editFormData,
                    verified: e.target.value === "true",
                  })
                }
              >
                <option className="text-[14px] font-[400] text-black" value="true">True</option>
                <option className="text-[14px] font-[400] text-black" value="false">False</option>
              </select>
            </div>
            <div className="space-x-4 flex flex-row py-2">
            <button 
              className="bg-black border border-black px-3 py-2 rounded-[8px] text-[14px] text-white font-[400]" 
              onClick={handleSaveChanges}>
              Save Changes
            </button>
            <button
              className="border border-slate-500 px-4 py-2 rounded-[8px] text-[14px] text-black font-[400]"
              onClick={() => setEditUserId(null)}
            >
              Cancel
            </button>
            </div>
          </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
