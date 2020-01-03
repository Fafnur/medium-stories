module.exports = {
  name: 'frontend-graphql',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/frontend/graphql',
  snapshotSerializers: ['jest-preset-angular/AngularSnapshotSerializer.js', 'jest-preset-angular/HTMLCommentSerializer.js']
};
