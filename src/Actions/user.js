import { getUserProfile } from 'Services/Auth.service';

export const fetchUser = async dispatch => {
  try {
    dispatch({ type: 'USER_FETCHING_REQUEST' });
    const { data: response } = await getUserProfile();

    const {
      data: { user }
    } = response;
    dispatch({ type: 'USER_FETCHING_SUCCESS', payload: user });
    // console.log(response, 'user details');
  } catch (error) {
    dispatch({ type: 'USER_FETCHING_ERROR' });
    console.log(error, 'user profile fetch error');
  }
};
