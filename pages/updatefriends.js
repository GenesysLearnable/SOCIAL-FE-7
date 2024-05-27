import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Particle from '../components/design';
import styles from '../styles/update.module.css';
import { useGetUsersQuery } from '@/src/features/auth/userApiSlice';
import Loader from '@/components/Loader';
import {
  useGetFriendQuery,
  useUpdateFriendsRequestMutation,
} from '@/src/features/auth/friendsApiSlice';
import { toast } from 'react-toastify';
import TimeFormat from '@/components/timeFormat';

function UpdateFriends() {
  const router = useRouter();

  const { data: usersFriends, refetch, isLoading, error } = useGetFriendQuery();

  const [
    updateFriendsRequest,
    {
      isLoading: loadingUpdateFriendsRequest,
      error: updateFriendsRequestError,
    },
  ] = useUpdateFriendsRequestMutation();

  const acceptRequestBtn = async (id) => {
    try {
      const res = await updateFriendsRequest({
        sender: id,
        status: 'accepted',
      }).unwrap();
      refetch();
      toast.success(res);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  const rejectRequestBtn = async (id) => {
    try {
      const res = await updateFriendsRequest({
        sender: id,
        status: 'rejected',
      }).unwrap();
      refetch();
      toast.success(res);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  const routerBtn = () => {
    router.push('/call')
  }

  return (
    <>
      <Particle />

      <div className={styles.containerAddfriend}>
        <div className={styles['parent-div2']}>
          <img
          onClick={routerBtn}
            src='https://res.cloudinary.com/duz7maquu/image/upload/v1716030522/SeeMe/arrow-left_y1wsd8.svg'
            width={30}
            height={30}
          />
          <h1>Friend Request</h1>
          <img
            src='https://res.cloudinary.com/duz7maquu/image/upload/v1716041164/SeeMe/Layer_2_rzzmxu.svg'
            className={styles.logo}
          />
        </div>
        {isLoading && <Loader />}
        <div className={styles['parent-div']}>
          <div className={styles.cally}>
            <p className={styles.header}>Friend Requests</p>

            <>
              {usersFriends &&
                usersFriends.map((user) => (
                  <div key={user._id}>
                    <img
                      className={styles.userImg}
                      src={user.sender.image?.url || user.sender.image}
                      alt=''
                      width={50}
                      height={50}
                    />
                    <TimeFormat time={user.createdAt} />
                    {user.sender.username}{' '}
                    <button
                      onClick={() => acceptRequestBtn(user.sender)}
                      className={styles.accept}
                    >
                      {user.status === 'Accepted' ? 'Accepted' : 'Accept'}
                    </button>
                    <button onClick={() => rejectRequestBtn(user.sender)} className={styles.reject}>
                      Reject
                    </button>
                  </div>
                ))}
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateFriends;
