import { format } from 'date-fns';
/**
 * Get the welcome message suitable for current moment using the date utils
 * @param currentTime The current time date
 * @returns string afternoon | morning | evening
 */
export function getCurrentMomentMessage(
  currentTime: Date = new Date(),
): 'morning' | 'afternoon' | 'evening' {
  const currentHour = currentTime.getHours();
  const splitAfternoon = 12;
  const splitEvening = 17;

  if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
    // Between 12 PM and 5PM
    return 'afternoon';
  } else if (currentHour >= splitEvening) {
    // Between 5PM and Midnight
    return 'evening';
  }
  // Between dawn and noon
  return 'morning';
}

//.TODO: use user preference to set the time here, 24hour | 12 hour default to 24 hour
// TODO: accept time zone parameter
export function formatTime(time: Date = new Date()): string {
  const formattedTime = format(time, 'HH:mm');

  return formattedTime;
}
