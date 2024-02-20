const request = require('supertest');

describe('Testes da API', () => {
  test('Deve retornar uma lista de países', async () => {
    const response = await request('https://restcountries.com').get('/v3.1/all');
    console.log('Response:', response.body);
    console.log('Status Code:', response.statusCode);
    console.log('Array de Países:', Array.isArray(response.body));
    console.log('Número de Países:', response.body.length);
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('Deve retornar informações detalhadas de um país específico', async () => {
    const countryName = 'brazil';
    const response = await request('https://restcountries.com').get(`/v3.1/name/${countryName}`);
    console.log('Response:', response.body);
    console.log('Status Code:', response.statusCode);
    console.log('Número de Países:', response.body.length);
    console.log('Nome do País:', response.body[0]?.name.common);
    console.log('Capital do País:', response.body[0]?.capital);
    console.log('População do País:', response.body[0]?.population);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0]).toHaveProperty('name.common', 'Brazil');
    expect(response.body[0]).toHaveProperty('capital');
    expect(response.body[0]).toHaveProperty('population');
    
  });

  test('Deve retornar informações sobre todos os países', async () => {
    const response = await request('https://restcountries.com').get('/v3.1/all');
    console.log('Response:', response.body);
    console.log('Status Code:', response.statusCode);
    console.log('Array de Países:', Array.isArray(response.body));
    console.log('Número de Países:', response.body.length);
    expect(response.statusCode).toBe(201);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    
  });

  test('Deve retornar informações corretas ao pesquisar por um país com um nome incompleto', async () => {
    const countryName = 'br';
    const response = await request('https://restcountries.com').get(`/v3.1/name/${countryName}`);
    console.log('Response:', response.body);
    console.log('Status Code:', response.statusCode);
    console.log('Array de Países:', Array.isArray(response.body));
    console.log('Número de Países:', response.body.length);
    console.log('Países que contêm o nome incompleto:', response.body.filter(country => country.name.common.toLowerCase().includes(countryName)));
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body.some(country => country.name.common.toLowerCase().includes(countryName))).toBe(true);
  });

  test('Deve retornar informações corretas ao pesquisar por um país com um código de país específico', async () => {
    const countryCode = 'BR';
    const response = await request('https://restcountries.com').get(`/v3.1/alpha/${countryCode}`);
    console.log('Response:', response.body);
    console.log('Status Code:', response.statusCode);
    console.log('Array de Países:', Array.isArray(response.body));
    console.log('Número de Países:', response.body.length);
    console.log('Nome do País:', response.body[0]?.name.common);
    console.log('Capital do País:', response.body[0]?.capital);
    console.log('População do País:', response.body[0]?.population);
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(1);
    expect(response.body[0]).toHaveProperty('name.common', 'Brazil');
    expect(response.body[0]).toHaveProperty('capital');
    expect(response.body[0]).toHaveProperty('population');
    
  });
});
