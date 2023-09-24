const dbUrl = process.env.OUTERBASE_API_URL;
const clientDbUrl = process.env.NEXT_PUBLIC_OUTERBASE_API_URL;
const apiKey = process.env.NEXT_PUBLIC_OUTERBASE_API_KEY;

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

export async function UserProfile(userId: string) {
  try {
    const response = await fetch(`${clientDbUrl}/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userId, api_key: apiKey }),
    });
    if (!response.ok) {
      throw new Error(`Error fetching user profile: ${response.statusText}`);
    }
    const data = await response.json();

    return data.item.items[0];
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
}

export async function UserNotifications(userId: string) {
  try {
    const response = await fetch(`${clientDbUrl}/notificationSettings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userId, api_key: apiKey }),
    });
    if (!response.ok) {
      throw new Error(`Error fetching user profile: ${response.statusText}`);
    }
    const data = await response.json();

    return data.item.items;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
}

export async function FinancialData(userId: string) {
  try {
    const response = await fetch(`${clientDbUrl}/financialData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userId, api_key: apiKey }),
    });
    if (!response.ok) {
      throw new Error(
        `Error fetching user financialData: ${response.statusText}`
      );
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching user financialData:", error);
    throw error;
  }
}
