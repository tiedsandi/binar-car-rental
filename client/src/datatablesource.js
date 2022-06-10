export const userColumns = [
    { field: "id", headerName: "ID", width: 100 },
    {
        field: "email",
        headerName: "User Email",
        width: 200,
    },
    {
        field: "car",
        headerName: "Cars",
        width: 250,
    },
    {
        field: "startRent",
        headerName: "Start Rent",
        width: 300,
    },
    {
        field: "finishRent",
        headerName: "Finish Rent",
        width: 300,
    },
    {
        field: "price",
        headerName: "Price",
        width: 150,
    },
    {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },
];

//temporary data
export const userRows = [
    {
        id: 1,
        email: "1snow@gmail.com",
        car: "Snow",
        startRent: "2020-01-01",
        finishRent: "2020-01-20",
        price: 35000,
        status: "active",
    },
    {
        id: 2,
        email: "2snow@gmail.com",
        car: "Jamie Lannister",
        startRent: "2020-02-02",
        finishRent: "2020-02-20",
        price: 42000,
        status: "passive",
    },
    {
        id: 3,
        email: "3snow@gmail.com",
        car: "Lannister",
        startRent: "2020-03-03",
        finishRent: "2020-03-20",
        price: 45000,
        status: "pending",
    },
    {
        id: 4,
        email: "4snow@gmail.com",
        car: "Stark",
        startRent: "2020-04-04",
        finishRent: "2020-04-20",
        price: 16000, status: "active",
    },
    {
        id: 5,
        email: "5snow@gmail.com",
        car: "Targaryen",
        startRent: "2020-05-05",
        finishRent: "2020-05-20",
        price: 22000, status: "passive",
    },
    {
        id: 6,
        email: "6snow@gmail.com",
        car: "Melisandre",
        startRent: "2020-06-06",
        finishRent: "2020-06-20",
        price: 15000, status: "active",
    },
    {
        id: 7,
        email: "7snow@gmail.com",
        car: "Clifford",
        startRent: "2020-07-07",
        finishRent: "2020-07-20",
        price: 44000, status: "passive",
    },
    {
        id: 8,
        email: "8snow@gmail.com",
        car: "Frances",
        startRent: "2020-08-08",
        finishRent: "2020-08-20",
        price: 36000, status: "active",
    },
    {
        id: 9,
        email: "snow@gmail.com",
        car: "Roxie",
        startRent: "2020-09-09",
        finishRent: "2020-09-20",
        price: 65000, status: "pending",
    },
    {
        id: 10,
        email: "snow@gmail.com",
        car: "Roxie",
        startRent: "2020-10-10",
        finishRent: "2020-10-20",
        price: 65000, status: "active",
    },
];