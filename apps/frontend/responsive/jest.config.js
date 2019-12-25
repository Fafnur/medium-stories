module.exports = {
  name: 'frontend-responsive',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/frontend/responsive',
  snapshotSerializers: ['jest-preset-angular/AngularSnapshotSerializer.js', 'jest-preset-angular/HTMLCommentSerializer.js']
};
