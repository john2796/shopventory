import axios from "axios";

const apiName = "https://dog.ceo/api";

export const getAllBreeds = () => {
  const uri = `${apiName}/breeds/list/all`;
  return axios.get(uri);
};

export const getDogByBreed = (
  breedName,
  breedSubTypeName,
  imgCount = 1,
  hasSubType = false
) => {
  const uri = hasSubType
    ? `${apiName}/breed/${breedName}/${breedSubTypeName}/images/random/${imgCount}`
    : `${apiName}/breed/${breedName}/images/random/${imgCount}`;

  return axios.get(uri);
};
