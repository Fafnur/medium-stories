module.exports = {
  name: 'layouts',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/layouts',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
