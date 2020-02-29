module.exports = {
  name: 'dynamic-forms',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/dynamic-forms',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
