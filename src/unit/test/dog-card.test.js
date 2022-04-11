import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import DogCard from "../../components/dog-card/DogCard";
import DogCardView from "../view/dog-card.view";
import { initialState } from "../../store/slice/dogs";

const mockStore = configureStore([thunk]);
const mockInitialState = {
  dogs: initialState,
};
const store = mockStore(mockInitialState);

const testId = "dog-card";
const defaultProps = {
  "data-testid": testId,
  dogName: "bulldog",
  imgSrc: "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
  imgAlt: "bulldog",
  subtype: "french",
};

describe("components/dog-card/DogCard", () => {
  it("renders the component", () => {
    const view = renderView();
    expect(view.cardImg).toBeInTheDocument();
    expect(view.dogName).toBeInTheDocument();
    expect(view.dogSubtype).toBeInTheDocument();
  });
});

const renderView = () => {
  return new DogCardView(
    render(
      <Provider store={store}>
        <MemoryRouter>
          <DogCard {...defaultProps} />
        </MemoryRouter>
      </Provider>
    ),
    testId
  );
};
