module.exports = {
  name: 'responsive',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/responsive',
  snapshotSerializers: ['jest-preset-angular/AngularSnapshotSerializer.js', 'jest-preset-angular/HTMLCommentSerializer.js']
};
