module.exports = {
  name: 'frontend-hybrid',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/frontend/hybrid',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
