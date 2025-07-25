import { Entity } from '@nodejsdev025/repo-orm';
import { BaseEntity } from './base-entity';

@Entity({ name: 'projects' })
export class ProjectEntity extends BaseEntity<any> {
  name: string;

  description?: string;

  tenantId?: string;
}
