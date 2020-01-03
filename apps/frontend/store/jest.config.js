module.exports = {
  name: 'frontend-store',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/frontend/store',
  snapshotSerializers: ['jest-preset-angular/AngularSnapshotSerializer.js', 'jest-preset-angular/HTMLCommentSerializer.js']
};
