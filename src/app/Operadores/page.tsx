import ButtonNewOperator from "@/components/buttonNewOperator"
import OperatorsTable from "@/components/operatorsTable"

export default function OperatorsPage() {
    return(
        <>
            <div className="flex justify-between items-center ml-[10%] mr-[10%]">
                <h1 className="mt-4 text-3xl">Manipulação de Operadores</h1>
                <ButtonNewOperator/>
            </div>
            <div>
                <OperatorsTable/>
            </div>
        </>
    )
}
    