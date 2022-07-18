import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Manager } from './manager.entity';

@Injectable()
export class ManagerService {
    constructor(
        @InjectRepository(Manager)
        private readonly managerRepository: Repository<Manager>,
    ) {}

    async findAll(): Promise<Manager[]> {
        try {
            return await this.managerRepository.find();
        } catch (e) {
            return e;
        }
    }

    async create(manager: Manager): Promise<Manager> {
        try {
            return await this.managerRepository.save(manager);
        } catch (e) {
            return e;
        }
    }

    async findOne(id: number): Promise<Manager> {
        try {
            return await this.managerRepository.findOne({ where: { id: id } });
        } catch (e) {
            return e;
        }
    }

    async update(id: number, manager: Manager): Promise<Manager> {
        try {
            let toUpdate = await this.managerRepository.findOne({ where: { id: id } });
            let updated = Object.assign(toUpdate, manager);
            return await this.managerRepository.save(updated);
        } catch (e) {
            return e;
        }
    }

    async delete(id: number): Promise<DeleteResult> {
        try {
            return await this.managerRepository.delete({ id: id });
        } catch (e) {
            return e;
        }
    
    }
    

}
