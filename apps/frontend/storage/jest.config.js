module.exports = {
  name: 'frontend-storage',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/frontend/storage',
  snapshotSerializers: ['jest-preset-angular/AngularSnapshotSerializer.js', 'jest-preset-angular/HTMLCommentSerializer.js']
};
