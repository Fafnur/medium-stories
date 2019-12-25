module.exports = {
  name: 'frontend-markup',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/frontend/markup',
  snapshotSerializers: ['jest-preset-angular/AngularSnapshotSerializer.js', 'jest-preset-angular/HTMLCommentSerializer.js']
};
