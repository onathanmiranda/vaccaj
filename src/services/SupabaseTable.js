import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const SupabaseClient = createClient(supabaseUrl, supabaseKey);

class SupabaseTable {
  constructor(tableName) {
    this.tableName = tableName;
  }
  runReadQuery = async ({ select = "*", eq = [] }) => {
    try {
      const query = SupabaseClient.from(this.tableName).select(select);

      if (eq.length) {
        eq.forEach((condition) => query.eq(...condition));
      }

      const { data, error } = await query;

      if (error) throw error;

      return data;
    } catch (error) {
      // Handle or rethrow the error
      console.error(`Error querying table ${this.tableName}:`, error);
      throw error; // Re-throwing to let the calling method handle it
    }
  };
}

export default SupabaseTable;