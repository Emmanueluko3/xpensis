const dbUrl = process.env.OUTERBASE_API_URL;

export async function createUser(user: {
  email: string;
  fullName: string;
  password: string;
}) {
  try {
    const response = await fetch(`${dbUrl}/signup`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: '{"password":"emmanuel1234","fullName":"Emmanuel Stephen","email":"emmanueluko4@gmail.com"}',
    });
    return response.json();
  } catch (error) {
    return error;
  }
}

export async function findOneUser(email: string) {
  try {
    const response = await fetch(`${dbUrl}/signin`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: `${JSON.stringify({ email: email })}`,
    });
    return response.json();
  } catch (error) {
    return error;
  }
}
