import { Transfers } from '../models/transfers.model';

export const createTransfer = async (
  id: number,
  from_user_id: number,
  to_user_id: number,
  amount: number,
  created_at?: Date

): Promise<Transfers> => {
  return Transfers.create({
    id,
    from_user_id,
    to_user_id,
    amount,
    created_at
  });
};
