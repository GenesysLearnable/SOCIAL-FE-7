import React from 'react';
import { timeAgo } from '../utils/timeAgo';

const TimeFormat = ({ time }) => {
  return <>{timeAgo(time)}</>;
};

export default TimeFormat;
