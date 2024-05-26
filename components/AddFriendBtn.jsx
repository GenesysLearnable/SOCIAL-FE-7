import React from 'react';

const AddFriendBtn = ({ status, userID }) => {
  console.log(userID);
  return (
    <>
      <button>
        {status === 'accepted'
          ? 'Friends'
          : status === 'pending'
          ? 'Sent'
          : 'Add'}
      </button>
    </>
  );
};

export default AddFriendBtn;
