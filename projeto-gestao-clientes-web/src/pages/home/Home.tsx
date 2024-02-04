import { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";

export function Home() {
    const [clientAdded, setClientAdded] = useState(false);

    const handleClientAdded = () => {
        setClientAdded(true); // Atualiza o estado para indicar que um cliente foi adicionado
    };

    return (
        <>
            <Header onClientAdded={handleClientAdded} />
            <Main clientAdded={clientAdded} />
        </>
    )
}