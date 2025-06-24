import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Machine } from "@/types/machine";

type MachineStore = {
  machines: Machine[];
  addMachine: (machine: Machine) => void;
  updateMachine: (machine: Machine) => void;
  deleteMachine: (machine: Machine) => void;
};

export const useMachineStore = create<MachineStore>()(
  persist(
    (set) => ({
      machines: [],
      addMachine: (machine) =>
        set((state) => ({
          machines: [...state.machines, machine],
        })),
      updateMachine: (machine) =>
        set((state) => ({
          machines: state.machines.map((mach) =>
            mach.id === machine.id ? machine : mach
          ),
        })),
      deleteMachine: (machine) =>
        set((state) => ({
          machines: state.machines.filter((mach) => mach.id !== machine.id),
        })),
    }),
    {
      name: "machine-storage",
    }
  )
);
