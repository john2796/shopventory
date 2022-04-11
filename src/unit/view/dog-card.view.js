import { getByTestId } from "@testing-library/react";

export default class DogCardView {
  constructor(dom, testId) {
    this.dom = dom;
    this.testId = testId;
  }

  get cardImg() {
    return getByTestId(this.dom.container, `${this.testId}.img`);
  }

  get dogName() {
    return getByTestId(this.dom.container, `${this.testId}.name`);
  }

  get dogSubtype() {
    return getByTestId(this.dom.container, `${this.testId}.subtype`);
  }
}
