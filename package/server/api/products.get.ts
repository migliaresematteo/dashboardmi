import { defineEventHandler, getQuery, createError } from 'h3'

export default defineEventHandler(async (event) => {
  // Ottieni i parametri dalla query
  const query = getQuery(event)
  const limit = query.limit || 100
  const store = query.store
  const vendors = query.vendors
  const categories = query.categories
  const shipping_days = query.shipping_days
  const user_roles = query.user_roles
  const s = query.s // search term
  
  // URL base per l'API di Mercato Itinerante
  const baseUrl = 'https://www.mercatoitinerante.it'
  
  // Ottieni l'API key dalle variabili d'ambiente
  const apiKey = process.env.NUXT_API_KEY || ''
  
  try {
    // Prepara i parametri per la chiamata API
    const params: Record<string, any> = {}
    if (limit) params.limit = limit
    if (store) params.store = store
    if (vendors) params.vendors = vendors
    if (categories) params.categories = categories
    if (shipping_days) params.shipping_days = shipping_days
    if (user_roles) params.user_roles = user_roles
    if (s) params.s = s
    
    // Prepara gli headers
    const headers: Record<string, string> = {}
    if (apiKey) {
      headers['x-api-key'] = apiKey
    }
    
    // Effettua la chiamata all'API esterna
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