import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';

export const COMPLIANCE_QUEUE = 'compliance-queue';
export const GITHUB_PR_QUEUE = 'github-pr-queue';

export interface ComplianceJobPayload {
  jobId: string;
  workspaceId: string;
  userId: string;
  projectIdea: string;
  jurisdictions: string[];
  frameworks: string[];
  existingSpec?: string;
  regulations?: string[];
  githubRepo?: {
    owner: string;
    repo: string;
    branch: string;
  };
}

export interface GitHubPRJobPayload {
  workspaceId: string;
  repoOwner: string;
  repoName: string;
  branch: string;
  specFilePath: string;
  specContent: string;
  regulations: string[];
}

@Module({
  imports: [
    BullModule.registerQueue(
      { name: COMPLIANCE_QUEUE },
      { name: GITHUB_PR_QUEUE }
    ),
  ],
  exports: [BullModule],
})
export class QueueModule {}
