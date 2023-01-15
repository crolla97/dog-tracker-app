import AsyncStorage from '@react-native-async-storage/async-storage'
import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ynylcgztvhytdfizvgsh.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlueWxjZ3p0dmh5dGRmaXp2Z3NoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM3Mjg3MjIsImV4cCI6MTk4OTMwNDcyMn0.w8WPFJXIc0dO0C-RWzrAtbFRnO7rRCBTdjlIZV_JKZg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})