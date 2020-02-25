module.exports = {
  name: 'frontend-redux',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/frontend/redux',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
