import { formatDistanceToNow } from 'date-fns';

export function timeAgo(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}
