import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();
  try {
    return { photo, user };
  } catch (e) {
    return { photo: null, user: null };
  }
}
export default asyncUploadUser;
