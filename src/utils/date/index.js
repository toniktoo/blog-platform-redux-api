import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  diffDate,
  parseISO,
} from 'date-fns';

// date

export default class DiffTime {
  constructor(timeNow, timeCreatedAt) {
    this.timeNow = timeNow;
    this.timeCreatedAt = timeCreatedAt;
  }

  getDay() {
    return differenceInDays(this.timeNow, this.timeCreatedAt);
  }

  getHours() {
    let diffHours = differenceInHours(this.timeNow, this.timeCreatedAt);
    diffHours %= 24;
    return diffHours;
  }

  getMinutes() {
    let diffMinutes = differenceInMinutes(this.timeNow, this.timeCreatedAt);
    diffMinutes %= 60;
    return diffMinutes;
  }
}

export const getFormatedDate = (date) => {
  const diffTime = new DiffTime(new Date(), parseISO(date));
  const diffDay = diffTime.getDay();
  const diffHours = diffTime.getHours();
  const diffMinutes = diffTime.getMinutes();

  const validateTimeEmpty = (diffItem, nameItem) =>
    diffItem !== 0 ? `${diffItem} ${nameItem}` : '';

  const renderTimeAfterCreation = () => {
    if (diffDay === 0 && diffHours === 0 && diffMinutes === 0) return 'now';
    return `${validateTimeEmpty(diffDay, 'days')} ${validateTimeEmpty(
      diffHours,
      'hours'
    )} ${validateTimeEmpty(diffMinutes, 'minutes')} ago`;
  };

  return renderTimeAfterCreation();
};
