import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"; // Certifique-se de instalar: npm install react-toastify
import Categoria from "../../../models/Categoria";
import './CardCategory.css';

interface CardCategoriaProps {
    categoria: Categoria
}

const CardCategorias = ({ categoria }: CardCategoriaProps) => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [action, setAction] = useState<"edit" | "delete" | null>(null);

    const handleAction = (type: "edit" | "delete") => {
        setAction(type);
        setShowConfirmation(true);
    };

    const confirmAction = () => {
        if (action === "edit") {
            // Redireciona para a edição
            window.location.href = `/editarcategoria/${categoria.id}`; 
        } else if (action === "delete") {

            // Lógica para deletar a categoria 
            fetch(`/categorias/${categoria.id}`, { method: 'DELETE' })
                .then(response => {
                    if (response.ok) {
                        toast.success("Categoria deletada com sucesso!");

                        // Redirecionar ou atualizar a lista de categorias
                        setTimeout(() => {
                            window.location.href = "/categorias"; 
                          }, 2000); 
                    } else {
                        toast.error("Erro ao deletar categoria.");
                    }
                })
                .catch(error => {
                    toast.error("Erro ao deletar categoria:", error);
                });
        }
        setShowConfirmation(false);
        setAction(null);
    };

    const cancelAction = () => {
        setShowConfirmation(false);
        setAction(null);
    };

    return (
        <div className="card">
            <header className="px-6 py-2 text-2xs font-medium text-white bg-black/[0.96] w-full">
                Categoria
            </header>

            <p className="h-full p-8 text-3xl bg-white">{categoria.tipo}</p>

            <div className="card-buttons">
                <button
                    onClick={() => handleAction("edit")}
                    className="flex items-center justify-center w-full py-2 bg-teal-600 text-slate-50 hover:bg-teal-800"
                >
                    Editar
                </button>

                <button
                    onClick={() => handleAction("delete")}
                    className="flex items-center justify-center w-full bg-red-500 text-slate-50 hover:bg-red-700"
                >
                    Deletar
                </button>
            </div>

            {showConfirmation && (
                <div className="confirmation-popup"> {/* Estilize este popup */}
                    <p>
                        Tem certeza que deseja {action === "edit" ? "editar" : "deletar"} esta categoria?
                    </p>
                    <button onClick={confirmAction}>Sim</button>
                    <button onClick={cancelAction}>Não</button>
                </div>
            )}
        </div>
    );
}

export default CardCategorias;