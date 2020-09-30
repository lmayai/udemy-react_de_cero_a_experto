import { getImagen } from "../../base/11-async-await"

describe('Testing 11-async-await.js', () => {
  test('should getImagen return an url', async () => {
    const url = await getImagen();
    expect(url.includes('http')).toBe(true);
  })
})
