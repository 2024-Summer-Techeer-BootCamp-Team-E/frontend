import { http, HttpResponse } from 'msw'

export const handlers = [
  http.post('/api/v1/products/scrape', async ({ request }) => {
    const data = await request.json()
    return HttpResponse.json([
      {
        urlData: data.url,
        code: 'P001',
        status: '201',
        message: 'hihi',
        data: {
          product_name: 'Samsung Galaxy S21',
          price: 990000,
          delivery_charge: 5000,
          link: 'https://example.com/product/12345',
          image_url: 'https://example.com/images/product_12345.jpg',
        },
      },
    ])
  }),
]
