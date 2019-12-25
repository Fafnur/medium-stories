module.exports = {
  name: 'frontend-translation',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/frontend/translation',
  snapshotSerializers: ['jest-preset-angular/AngularSnapshotSerializer.js', 'jest-preset-angular/HTMLCommentSerializer.js']
};
