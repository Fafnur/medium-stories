module.exports = {
  name: 'frontend-forms',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/frontend/forms',
  snapshotSerializers: ['jest-preset-angular/AngularSnapshotSerializer.js', 'jest-preset-angular/HTMLCommentSerializer.js']
};
