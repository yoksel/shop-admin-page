import directions from './directions.js';

export const getDirectionText = (isAsc) => {
  return directions[+isAsc];
}
