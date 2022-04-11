import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import dogs from "./dogs";

const store = configureStore({
  reducer: {
    dogs: dogs.reducer,
  },
  middleware: [...getDefaultMiddleware({ serializableCheck: false })],
});

export default store;
