import CancelButton from "@/components/buttonCancel";

export default function NewOperatorPage() {
    return (
        <div className="flex justify-between items-center ml-[10%] mr-[10%]">
            <h1 className="mt-4 text-3xl">Adicionar Operador</h1>
            <CancelButton/>
        </div>
    );
}