import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';
import TransectionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransectionRepository);

    const findTransection = await transactionsRepository.findOne(id);

    if (!findTransection) {
      throw new AppError('Transaction not found', 204);
    }

    await transactionsRepository.remove(findTransection);
  }
}

export default DeleteTransactionService;
