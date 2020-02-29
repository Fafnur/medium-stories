module.exports = {
  name: 'translation',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/translation',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
