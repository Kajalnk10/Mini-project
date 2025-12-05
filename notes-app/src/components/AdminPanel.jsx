import React from "react";

export default function AdminPanel({ users }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Panel - Users List</h1>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2 text-left">Username</th>
            <th className="border border-gray-400 px-4 py-2 text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-50">
              <td className="border border-gray-400 px-4 py-2">{user.username}</td>
              <td className="border border-gray-400 px-4 py-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}