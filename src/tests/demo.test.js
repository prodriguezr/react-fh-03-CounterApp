describe('Tests in the demo.test file', () => {
  test('debe de ser true', () => {
    // 1.- Inicialización
    const message = 'Hello, World!';
    // 2.- Estímulo
    const message2 = `Hello, World!`;
    // 3.- Observar el comportamiento
    expect(message).toBe(message2);
  });
});
