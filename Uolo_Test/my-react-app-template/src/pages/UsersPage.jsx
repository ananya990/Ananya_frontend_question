import {useEffect, useState} from 'react'
import UserList from "../components/UserList";
import Pagination from "../components/Pagination";
import {getUsers, deleteUserById} from "../services/userService";

function UsersPage() {
    const [users, setUsers] = useState([]);
    const [page, setpage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const limit = 5;

    const loadUsers = async () => {
        setLoading(true);
        try{
            const data = await getUsers(page, limit);
            setUsers(data);
            setError("");
        }catch (err) {
            setError(err.message);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadUsers();
    }, [page]);

    const deleteUser = async (id) => {
        try {
            await deleteUserById(id);
            setUsers((prev) => prev.filter((u) => u.id !== id));
        } catch {
            alert ("Error deleting user");
        }
    };

  return (
    <div className="max-w-2xl mx-auto p-6">
    <h1 className="text-2xl font-bold text-center mb-5">Users Listing</h1>

    {loading && <p className="text-center text-gray-500">Loading...</p>}
    {error && <p className="text-center text-red-600">{error}</p>}

    <UserList users = {users} onDelete={deleteUser}/>

    <Pagination page={page} setPage={setPage}/>
    </div>
  )
}

export default UsersPage
