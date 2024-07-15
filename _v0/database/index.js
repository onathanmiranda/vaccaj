
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

exports = { 
  modules: {
    getAll: async () => {
      const { data, error } = await supabase.from('modules').select('*').order('order', { ascending: true })
      if (error) throw error
      return data
    }
  }
}