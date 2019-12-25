module.exports = {
  name: 'frontend-theming',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/frontend/theming',
  snapshotSerializers: ['jest-preset-angular/AngularSnapshotSerializer.js', 'jest-preset-angular/HTMLCommentSerializer.js']
};
