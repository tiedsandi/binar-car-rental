import apiCar from "./apiCar";


const getAll = () => {
    return apiCar.get("/mobil");
}

const getById = (id) => {
    return apiCar.get(`/mobil/${id}`);
}

const create = (data) => {
    return apiCar.post("/mobil", data);
}

const update = (id, data) => {
    return apiCar.put(`/mobil/${id}`, data);
}

const remove = (id) => {
    return apiCar.delete(`/mobil/${id}`);
}

const BinarService = {
    getAll,
    getById,
    create,
    update,
    remove
}

export default BinarService;