module.exports = {
  name: 'responsive',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/responsive',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
