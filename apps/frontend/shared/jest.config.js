module.exports = {
  name: 'frontend-shared',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/frontend/shared',
  snapshotSerializers: ['jest-preset-angular/AngularSnapshotSerializer.js', 'jest-preset-angular/HTMLCommentSerializer.js']
};
