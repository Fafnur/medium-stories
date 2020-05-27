module.exports = {
  name: 'frontend-css',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/frontend/css',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
