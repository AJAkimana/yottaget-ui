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
export const uploadPhotos = async (images, isUploaded) => {
  let imagesUrls = { uploaded: isUploaded, urls: [] };
  if (!isUploaded) {
    const urls = await Promise.all(
      await images.map(async (image) => {
        const imageData = getImageFileData(image);
        const imagesRes = await cloudinaryHttp.post('/', imageData);
        if (imagesRes.status === 200) {
          return imagesRes.data.secure_url;
        }
      })
    );
    if (urls.length === images.length) {
      imagesUrls.uploaded = true;
      imagesUrls.urls = urls;
    }
  }
  return imagesUrls;
};
export const uploadCoverImage = async (coverFile, isUploaded) => {
  let res = { uploaded: isUploaded };
  if (!isUploaded && coverFile) {
    let coverFileData = getImageFileData(coverFile);
    const coverImageRes = await cloudinaryHttp.post('/', coverFileData);
    if (coverImageRes.status === 200) {
      res.uploaded = true;
      res.coverUrl = coverImageRes.data.secure_url;
    }
  }
  return res;
};
export const truncate = (str, n) => {
  return str.length > n ? str.substr(0, n - 1) + '...' : str;
};
export const houseDescriptions = [
  { type: 'Saloon' },
  { type: 'Douche' },
  { type: 'Water' },
];
