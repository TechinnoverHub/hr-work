import { createOrder } from 'Services/Order.service';

export const saveOrder = async orderDetails => {
  try {
    await createOrder(orderDetails);
    // console.log(response, 'order saved');
  } catch (error) {
    // console.log(error.response, 'error saving order');
  }
};
