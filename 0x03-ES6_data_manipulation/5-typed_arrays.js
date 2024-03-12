export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const int8arr = new Int8Array(buffer);
  const dataview = new DataView(buffer);
  dataview.setInt8(position, value)
  return dataview;
}
