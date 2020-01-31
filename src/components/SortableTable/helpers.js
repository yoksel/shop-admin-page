import directions from './directions.js';

export const getDirectionText = isAsc => {
  return directions[+isAsc];
};

export const formatPriceForQuery = ({ key, value }) => {
  return {
    key,
    value: +value
  };
};
