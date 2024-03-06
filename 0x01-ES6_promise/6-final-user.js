import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(), uploadPhoto()])
    .then((array) => {
      const arr = [];
      array.forEach((promise) => {
        if (promise.status === 'rejected') {
          arr.push({ status: promise.status, value: promise.reason, });
	} else {
          arr.push({ status: promise.status, value: promise.value, });
	}
      })
      return arr;
    });
}
