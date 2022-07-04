// Registro de um Student em um Subject por ID

// POST - /subjects/registration/:subject_id

// Exemplo de Requisição

// POST - /subjects/registration/835db4ca-8a2e-4be5-887e-65345b0c73b6

// Corpo da Requisição

// {
//     student_id: "e0529bae-a82f-4ab4-97f4-692b1d662cf7"
// }

// Exemplo de Resposta

// 200 - OK 
// `Student ${student.name} registered for ${subject.name} succesfully`


// Casos de Erro

// 404 - Not Found - "Subject not found"
// Tentativa de registro em uma Subject que não existe

// 404 - Not Found - "Student not found"
// Tentativa de registro de um Student que não existe