import { defineEventHandler, getQuery, createError } from 'h3'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const limit = query.limit || 100
  const store = query.store
  const vendors = query.vendors
  const categories = query.categories
  const shipping_days = query.shipping_days
  const user_roles = query.user_roles
  const s = query.s // search term
  
  const baseUrl = 'https://www.mercatoitinerante.it'
  
  const apiKey = process.env.NUXT_API_KEY || ''
  
  try {
    const params: Record<string, any> = {}
    if (limit) params.limit = limit
    if (store) params.store = store
    if (vendors) params.vendors = vendors
    if (categories) params.categories = categories
    if (shipping_days) params.shipping_days = shipping_days
    if (user_roles) params.user_roles = user_roles
    if (s) params.s = s
    
    const headers: Record<string, string> = {}
    if (apiKey) {
      headers['x-api-key'] = apiKey
    }
    
    const products = await $fetch(`${baseUrl}/wp-json/mi_plugin/v1/get-products`, {
      params,
      headers
    })
    
    // Restituisci i dati
    return products
  } catch (error) {
    console.error('Errore nel recupero dei prodotti:', error)
    
    // Gestisci l'errore
    throw createError({
      statusCode: 500,
      statusMessage: 'Errore nel recupero dei prodotti dall\'API di Mercato Itinerante',
      data: error
    })
  }
})