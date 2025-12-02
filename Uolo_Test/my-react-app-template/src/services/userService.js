const API_URL = "https://dummyjson.com/users?skip=10&limit=10"

export const getUsers = async(page, limit) => {
    const res = await fetch('${API_URL}?_page=${page&_limit=${limit}}');
    if (!res.ok) throw new Error("Failed to fetch users");
    return await res.json();
};

export const deleteUserById= async(id) => {
    return fetch('${API_URL}/${id}', {method: "DELETE"})
}