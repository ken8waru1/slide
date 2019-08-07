export const OPEN_INFOBAR = 'OPEN_INFOBAR';
export const CLOSE_INFOBAR = 'CLOSE_INFOBAR';

export const openInfoBar = status => {
  return {
    type: OPEN_INFOBAR,
    status
  };
};

export const closeInfoBar = () => {
  return {
    type: CLOSE_INFOBAR
  };
};
