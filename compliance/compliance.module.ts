import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { ComplianceController } from './compliance.controller';
import { ComplianceService } from './compliance.service';
import { SupabaseService } from '../common/supabase.service';
import { WorkspacesModule } from '../workspaces/workspaces.module';

export const COMPLIANCE_QUEUE = 'compliance-queue';

@Module({
  imports: [
    BullModule.registerQueue({
      name: COMPLIANCE_QUEUE,
    }),
    WorkspacesModule,
  ],
  controllers: [ComplianceController],
  providers: [ComplianceService, SupabaseService],
  exports: [ComplianceService],
})
export class ComplianceModule {}
