"use client";

import { useParams } from 'next/navigation'; // Use useParams for dynamic route segments
import { useState, useEffect } from 'react';
import { users } from '@/data/user';

const Page = () => {
  const { userId } = useParams(); // Get userId from the URL
  console.log(userId);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  useEffect(() => {
    if (userId) {
      const user = users.find((user) => user.id === userId[0]);
      console.log(user)
      if (user) {
        setFormData({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        });
      }
    }
  }, [userId]);

  return (
    <div>
      <h1>{userId ? `Edit User ${userId}` : 'Create New User'}</h1>
      <form>
        <label>
          First Name:
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Page;