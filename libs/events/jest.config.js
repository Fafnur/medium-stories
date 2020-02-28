module.exports = {
  name: 'events',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/events',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
