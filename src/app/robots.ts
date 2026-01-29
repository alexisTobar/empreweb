import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Aquí puedes bloquear carpetas que no quieras que se vean
    },
    sitemap: 'https://empreweb.cl/sitemap.xml',
  }
}