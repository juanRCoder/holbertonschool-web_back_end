import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (e) {
    console.error(e);
    return { photo: null, user: null };
  }
}
export default asyncUploadUser;
