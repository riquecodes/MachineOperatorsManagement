import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Operator = {
    matricula: string;
    nome: string;
    cpf: string;
};

type OperatorStore = {
    operators: Operator[];
    addOperator: (operator: Operator) => void;
};

export const useOperatorStore = create<OperatorStore>()(
    persist(
        (set) => ({
            operators: [],
            addOperator: (operator) =>
            set((state) => ({
                operators: [...state.operators, operator],
            })),
        }),
        {
            name: 'operator-storage',
        }
    )
);