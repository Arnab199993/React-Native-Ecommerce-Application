class BaseApi {
  protected static readonly BaseUrl: string = "https://dummyjson.com/";
  protected static async BaseGetRequestAsync<T>(endpoint: string): Promise<T> {
    try {
      const response = await fetch(`${this.BaseUrl}${endpoint}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data: T = await response.json();
      return data;
    } catch (error) {
      console.error("There was an error with the POST request:", error);
      throw error;
    }
  }
  protected static async BasePostRequestAsync<T>(
    endpoint: string,
    body: any
  ): Promise<T> {
    try {
      const response = await fetch(`${this.BaseUrl}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data: T = await response.json();
      return data;
    } catch (error) {
      console.error("There was an error with the POST request:", error);
      throw error;
    }
  }
}

export default BaseApi;
