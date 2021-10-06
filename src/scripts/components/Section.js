export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._initialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._renderer(this._initialArray);
  }

  addItem(element) {
    this._container.append(element);
  }
}
