const dbUrl = process.env.OUTERBASE_API_URL;

export async function createUser(userData: {
  email: string;
  fullName: string;
  passwordHash: string;
}) {
  try {
    const response = await fetch(`${dbUrl}/signup`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: `${JSON.stringify(userData)}`,
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
