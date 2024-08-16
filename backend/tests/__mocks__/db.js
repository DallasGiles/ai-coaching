module.exports = {
    connectDB: jest.fn().mockImplementation(() => {
      console.log('Mocked DB Connection');
    }),
  };