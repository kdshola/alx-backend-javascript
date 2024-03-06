import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((array) => {
      console.log(`${array[0].body} ${array[1].firstName} ${array[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
