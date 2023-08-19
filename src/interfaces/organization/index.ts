import { AdministratorInterface } from 'interfaces/administrator';
import { CronJobInterface } from 'interfaces/cron-job';
import { InviteInterface } from 'interfaces/invite';
import { OwnerInterface } from 'interfaces/owner';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  administrator?: AdministratorInterface[];
  cron_job?: CronJobInterface[];
  invite?: InviteInterface[];
  owner?: OwnerInterface[];
  user?: UserInterface;
  _count?: {
    administrator?: number;
    cron_job?: number;
    invite?: number;
    owner?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
