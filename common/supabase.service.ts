import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private client: SupabaseClient;
  public db: SupabaseClient;

  constructor(private config: ConfigService) {
    const supabaseUrl = this.config.getOrThrow<string>('SUPABASE_URL');
    const supabaseServiceKey = this.config.getOrThrow<string>('SUPABASE_SERVICE_ROLE_KEY');
    
    this.client = createClient(supabaseUrl, supabaseServiceKey);
    this.db = this.client; // Expose as 'db' for easier access
  }

  getClient(): SupabaseClient {
    return this.client;
  }
}
