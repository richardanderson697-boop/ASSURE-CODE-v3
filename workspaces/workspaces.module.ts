import { Module } from '@nestjs/common';
import { WorkspacesController } from './workspaces.controller';
import { WorkspacesService } from './workspaces.service';
import { SupabaseService } from '../common/supabase.service';

@Module({
  controllers: [WorkspacesController],
  providers: [WorkspacesService, SupabaseService],
  exports: [WorkspacesService],
})
export class WorkspacesModule {}
