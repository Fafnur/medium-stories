module.exports = {
  name: 'frontend-infinite-scroll',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/frontend/infinite-scroll',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
