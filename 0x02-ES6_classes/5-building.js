export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (new.target.name !== 'Building' &&
	    typeof this.evacuationWarningMessage !== 'function') {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    this._sqft = newSqft;
  }
}
