export default function getSeason(date) {
  const seasons = [ 'winter', 'spring', 'summer', 'autumn'];

  if (!date) return 'Unable to determine the time of year!';
  if (!date.getMonth || Object.keys(date).length !== 0) throw new Error('Invalid date!');
  else
    switch (date.getMonth()) {
      case 11: case 0: case 1:
      return seasons[0];
      case 2: case 3: case 4:
      return seasons[1];
      case 5: case 6: case 7:
      return seasons[2];
      case 8: case 9: case 10:
      return seasons[3];
    }

}
