import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfilesSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);

  return Promise.allSettled([promise1, promise2])
    .then((data) => {
      const results = data.map((result) => {
        return { status: result.status, value: result.value || result.reason };
      })
      return results;
    });
}
