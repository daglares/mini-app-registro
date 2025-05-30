import { useEffect, useState } from 'react';

const ListaDeUsuarios = () =>{
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await fetch('https://silver-space-pancake-7vp5gvg77jqq3pr7g-5000.app.github.dev/users');
                const data = await response.json();
                setUsuarios(data);
            } catch (error) {
                console.error('Error al obtener usuarios:', error);
            } finally {
                setCargando(false);
            }
        };

        fetchUsuarios();
    }, []);

    return (
        <>
            <h2>Lista de usuarios registrados</h2>
            {cargando ? (
                <p>Cargando usuarios...</p>
            ) : (
                <ul>
                    {usuarios.map((user, index) => (
                        <li key={index}>
                            <strong>{user.name}</strong> — {user.email}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default ListaDeUsuarios;