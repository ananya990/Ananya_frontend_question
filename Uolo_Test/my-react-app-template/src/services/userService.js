const API_URL = "https://dummyjson.com/users";

export const getUsers = async (page = 1, limit = 10) => {
  try {
    const skip = (page - 1) * limit;

    const res = await fetch(`${API_URL}?limit=${limit}&skip=${skip}`);

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }

    return await res.json();
  } catch (error) {
    console.error("getUsers error:", error);
    throw error;
  }
};

export const deleteUserById = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete user");
    }

    return await res.json();
  } catch (error) {
    console.error("deleteUserById error:", error);
    throw error;
  }
};
