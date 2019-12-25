module.exports = {
  name: 'frontend-common-styles',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/frontend/common-styles',
  snapshotSerializers: ['jest-preset-angular/AngularSnapshotSerializer.js', 'jest-preset-angular/HTMLCommentSerializer.js']
};
