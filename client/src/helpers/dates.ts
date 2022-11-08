export function getDateString(date: Date) {
    const day = date.getDate();
    const month = date.getMonth(); //0 Indexed
    const year = date.getFullYear();
    return `${year}-${addZero(month)}-${day}`;
  }

function addZero(month: number) {
  let newMonth = month + 1;
  if (newMonth < 10) return `0${newMonth}`;
  return newMonth;
}


