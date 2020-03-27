import Axios from './index';

export const contactFormSubmit = async data => {
  return Axios({
    method: 'POST',
    url: '/form/contact-us',
    data
  });
};

export const careerFormSubmit = async data => {
  return Axios({
    method: 'POST',
    url: '/form/career',
    data
  });
};

// export const/
