module.exports = {
  name: 'frontend-testing',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/frontend/testing',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
