//query para insertar datos a una collection

db.usuarios.insertMany(
    [
        {
          "nombre": "Juan",
          "apellido": "Pérez",
          "correo": "juan.perez@example.com",
          "telefono": "+52 123 456 7890",
          "password": "Password123!",
          "fecha_de_registro": "2024-12-19T10:00:00Z",
          "fecha_de_nacimiento": "1985-06-15",
          "activo": true,
          "rol": "admin"
        },
        {
          "nombre": "María",
          "apellido": "Gómez",
          "correo": "maria.gomez@example.com",
          "telefono": "+52 987 654 3210",
          "password": "SecurePass456!",
          "fecha_de_registro": "2024-12-18T09:30:00Z",
          "fecha_de_nacimiento": "1990-08-22",
          "activo": false,
          "rol": "usuario"
        },
        {
          "nombre": "Carlos",
          "apellido": "Ramírez",
          "correo": "carlos.ramirez@example.com",
          "telefono": "+52 111 222 3333",
          "password": "StrongPassword789!",
          "fecha_de_registro": "2024-12-17T11:15:00Z",
          "fecha_de_nacimiento": "1982-12-01",
          "activo": true,
          "rol": "moderador"
        },
        {
          "nombre": "Ana",
          "apellido": "López",
          "correo": "ana.lopez@example.com",
          "telefono": "+52 444 555 6666",
          "password": "PassAna123!",
          "fecha_de_registro": "2024-12-16T14:20:00Z",
          "fecha_de_nacimiento": "1995-03-17",
          "activo": true,
          "rol": "usuario"
        },
        {
          "nombre": "Luis",
          "apellido": "Martínez",
          "correo": "luis.martinez@example.com",
          "telefono": "+52 777 888 9999",
          "password": "LuisPass456!",
          "fecha_de_registro": "2024-12-15T16:45:00Z",
          "fecha_de_nacimiento": "1987-11-05",
          "activo": false,
          "rol": "usuario"
        },
        {
          "nombre": "Sofía",
          "apellido": "Hernández",
          "correo": "sofia.hernandez@example.com",
          "telefono": "+52 222 333 4444",
          "password": "SofiaStrong789!",
          "fecha_de_registro": "2024-12-14T08:30:00Z",
          "fecha_de_nacimiento": "1993-02-14",
          "activo": true,
          "rol": "moderador"
        },
        {
          "nombre": "Diego",
          "apellido": "Torres",
          "correo": "diego.torres@example.com",
          "telefono": "+52 555 666 7777",
          "password": "DiegoPass321!",
          "fecha_de_registro": "2024-12-13T09:10:00Z",
          "fecha_de_nacimiento": "1989-09-09",
          "activo": false,
          "rol": "usuario"
        },
        {
          "nombre": "Lucía",
          "apellido": "Rojas",
          "correo": "lucia.rojas@example.com",
          "telefono": "+52 888 999 0000",
          "password": "LuciaSecure654!",
          "fecha_de_registro": "2024-12-12T12:50:00Z",
          "fecha_de_nacimiento": "1998-07-21",
          "activo": true,
          "rol": "usuario"
        },
        {
          "nombre": "Pedro",
          "apellido": "Alonso",
          "correo": "pedro.alonso@example.com",
          "telefono": "+52 333 444 5555",
          "password": "PedroStrong890!",
          "fecha_de_registro": "2024-12-11T10:25:00Z",
          "fecha_de_nacimiento": "1980-01-03",
          "activo": true,
          "rol": "moderador"
        },
        {
          "nombre": "Elena",
          "apellido": "Morales",
          "correo": "elena.morales@example.com",
          "telefono": "+52 111 222 3333",
          "password": "ElenaSecure987!",
          "fecha_de_registro": "2024-12-10T15:30:00Z",
          "fecha_de_nacimiento": "1991-05-29",
          "activo": false,
          "rol": "admin"
        }
      ]      
);      
    