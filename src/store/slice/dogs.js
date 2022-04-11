import { createSlice } from "@reduxjs/toolkit";
import { getAllBreeds, getDogByBreed } from "../../common/dogs";
import { entries, map, flatten } from "lodash";

export const initialState = {
  allBreeds: [],
  dogs: [],
  inProgress: false,
  error: null,
};

const slice = createSlice({
  name: "dogs",
  initialState,
  reducers: {
    setProgress: (state, action) => {
      state.inProgress = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setAllBreeds: (state, action) => {
      state.allBreeds = action.payload;
    },
    setDogs: (state, action) => {
      state.dogs = action.payload;
    },
  },
});

/*
Instructions:
1. You have the option to do this project in React, Angular JS, or vanilla javascript
2. Using the Dog API loop through ALL of the dogs, and show all possible subtypes. This includes nested types, example: Bulldog Boston, Bulldog French.
3. Use the image endpoint to attach the corresponding dog image to its card
4. The video can be any video from youtube
5. The nav links do not need to go anywhere but should be treated as if they did
*/

export const fetchAllBreeds = () => async (dispatch) => {
  try {
    dispatch(slice.actions.setProgress(true));
    const response = await getAllBreeds();
    dispatch(slice.actions.setAllBreeds(response.data.message));
  } catch (err) {
    dispatch(slice.actions.setError(err.response.data.message));
  } finally {
    dispatch(slice.actions.setProgress(false));
  }
};

export const fetchDogByBreed = () => async (dispatch, getState) => {
  try {
    dispatch(slice.actions.setProgress(true));
    const allBreed = getState()?.dogs?.allBreeds;
    const breedNameSubType = entries(allBreed).map(([key, obj]) => ({
      name: key,
      subtype: obj,
    }));

    const response = await Promise.all(
      map(breedNameSubType, async (b) => {
        if (b.subtype.length >= 1) {
          const getDogSubType = await Promise.all(
            map(b.subtype, async (subtypeName) => {
              const response = await getDogByBreed(
                b.name,
                subtypeName,
                1,
                true
              );
              const transformDogSubType = {
                name: b.name,
                subtype: subtypeName,
                img: response.data.message[0],
              };
              return transformDogSubType;
            })
          );
          return getDogSubType;
        }

        const response = await getDogByBreed(b.name, null, 1, false);
        const getDogsDataWithouthSubType = {
          name: b.name,
          img: response.data.message[0],
        };
        return getDogsDataWithouthSubType;
      })
    );

    const flattenResponse = flatten(response);
    dispatch(slice.actions.setDogs(flattenResponse));
  } catch (err) {
    dispatch(slice.actions.setError(err.response.data.message));
  } finally {
    dispatch(slice.actions.setProgress(false));
  }
};

export default slice;
