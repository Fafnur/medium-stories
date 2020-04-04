module.exports = {
  name: 'frontend-localization',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/frontend/localization',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
