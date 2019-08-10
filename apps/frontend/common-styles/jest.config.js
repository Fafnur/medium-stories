module.exports = {
  name: 'frontend-base',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/frontend/base',
  snapshotSerializers: ['jest-preset-angular/AngularSnapshotSerializer.js', 'jest-preset-angular/HTMLCommentSerializer.js']
};
