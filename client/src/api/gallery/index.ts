import axiosInstace from '../core';

export const galleries = async () => {
  try {
    const data = await axiosInstace('/gallery');
    return data;
  } catch (err) {
    console.log('galleries err: ', err);
    return null;
  }
};

export const cardByGallId = async (id: number) => {
  try {
    const data = await axiosInstace(`/gallery/${id}`);
    return data;
  } catch (err) {
    console.log('cardByGallId err: ', err);
    return null;
  }
};

export const addCardByGallId = async (id: number) => {
  try {
    const data = await axiosInstace(`/gallery/nft/${id}`);
    return data;
  } catch (err) {
    console.log('addCardByGallId err: ', err);
    return null;
  }
};

export const stake = async (id: number, unlockTime: number) => {
  try {
    const data = await axiosInstace(`/gallery/stake/${id}/${unlockTime}`);
    return data;
  } catch (err) {
    console.log('addCardRegi err: ', err);
    return null;
  }
};

export const addCardRegi = async (gallery_id: number, nft_id: number, nft_end_time: string) => {
  const options = {
    gallery_id: gallery_id,
    nft_id: nft_id,
    nft_end_time: nft_end_time,
  };

  try {
    const data = await axiosInstace.post('/gallery/nft', options);
    return data;
  } catch (err) {
    console.log('addCardRegi err: ', err);
    return null;
  }
};
