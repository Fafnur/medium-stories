module.exports = {
  name: 'users',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/users',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
