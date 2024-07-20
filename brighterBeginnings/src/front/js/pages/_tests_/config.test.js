test('Jest config test', () => {
    const config = require('../../../../jest.config.js');
    console.log(config,"config");
    expect(config).toBeDefined();
  });