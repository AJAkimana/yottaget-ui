import { cloudinaryHttp } from '../redux/utils/http';

export const findObject = (array = [], key = '', element = '') => {
  return array.find((object) => object[key] === element);
};

const getImageFileData = (imageFile) => {
  const data = new FormData();
  data.append('file', imageFile);
  data.append('upload_preset', 'nyxdcave');
  return data;
};
export const uploadPhotos = async (coverImage, images, isUploaded) => {
  let imagesUrls = { uploaded: isUploaded };
  if (!isUploaded) {
    let coverImageData = getImageFileData(coverImage);
    const coverImageRes = await cloudinaryHttp.post('/', coverImageData);
    if (coverImageRes.status === 200) {
      imagesUrls.coverImage = coverImageRes.data.secure_url;
    }
    const urls = await Promise.all(
      await images.map(async (image) => {
        const imageData = getImageFileData(image);
        const imagesRes = await cloudinaryHttp.post('/', imageData);
        if (imagesRes.status === 200) {
          return imagesRes.data.secure_url;
        }
      })
    );
    if (urls.length === images.length && imagesUrls.coverImage) {
      imagesUrls.uploaded = true;
      imagesUrls.urls = urls;
    }
  }
  return imagesUrls;
};
export const truncate = (str, n) => {
  return str.length > n ? str.substr(0, n - 1) + '...' : str;
};
