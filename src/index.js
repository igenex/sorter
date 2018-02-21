class Sorter {
  constructor() {
    this.array = [];
    this.sortType = (a, b) => a - b;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }


  sort(indices) {
    let temp_array = [];
    indices.forEach(item => {
      temp_array.push(this.array[item]);
    });
    temp_array.sort(this.sortType);
    indices.sort((a, b) => a - b);
    indices.forEach((item, i) => {
      this.array[item] = temp_array[i];
    });
  }

  setComparator(compareFunction) {
    // your implementation
    if (typeof compareFunction === "function") {
      this.sortType = compareFunction;
    }
  }
}

module.exports = Sorter;

