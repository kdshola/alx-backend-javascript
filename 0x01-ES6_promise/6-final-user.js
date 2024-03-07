import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName
) {
  const queue = [];
  try {
    const user = await signUpUser(firstName, lastName);
    queue.push({ status: 'fulfilled', value: user });
  } catch (err) {
    queue.push({ status: 'rejected', value: err.toString() });
  }
  try {
    const upload = await uploadPhoto(fileName);
    queue.push({ status: 'fulfilled', value: upload });
  } catch (err) {
    queue.push({ status: 'rejected', value: err.toString() });
  }
  return queue;
}
