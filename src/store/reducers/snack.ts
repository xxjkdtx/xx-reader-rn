const snack = (state: any = {}, action: any) => {
  switch (action.type) {
    case 'SHOW_SNACK':
      return {
        ...state,
        show: true,
      };
    case 'HIDE_SNACK':
      return {
        message: '',
        show: false,
      };
    default:
      return state;
  }
};

export default snack;
