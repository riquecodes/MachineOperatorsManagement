import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Operator } from "@/types/operator";

type OperatorStore = {
  operators: Operator[];
  addOperator: (operator: Operator) => void;
  updateOperator: (operator: Operator) => void;
  deleteOperator: (operator: Operator) => void;
};

export const useOperatorStore = create<OperatorStore>()(
  persist(
    (set) => ({
      operators: [],
      addOperator: (operator) =>
        set((state) => ({
          operators: [...state.operators, operator],
        })),
      updateOperator: (operator) =>
        set((state) => ({
          operators: state.operators.map((op) =>
            op.id === operator.id ? operator : op
          ),
        })),
      deleteOperator: (operator) =>
        set((state) => ({
          operators: state.operators.filter((op) => op.id !== operator.id),
        })),
    }),
    {
      name: "operator-storage",
    }
  )
);
