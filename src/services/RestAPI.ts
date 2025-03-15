/* eslint-disable @typescript-eslint/no-explicit-any */
class RestAPI {
  controller: AbortController | null = null;

  sendRequest = async ({
    method,
    url,
    params,
    data,
    headers,
    signal,
  }: {
    method: string;
    url: string;
    params?: any;
    data?: any;
    headers?: Record<string, string>;
    signal?: AbortSignal;
  }): Promise<any> => {
    // CONTROLLER
    if (this.controller) {
      this.controller.abort();
    }
    this.controller = new AbortController();
    signal = signal ?? this.controller.signal;

    // PARAMS
    if (params instanceof Object) {
      const urlParams = new URLSearchParams();
      Object.keys(params).forEach((key) =>
        urlParams.append(key, JSON.stringify(params[key]))
      );
      url = `${url}?${urlParams.toString()}`;
    }

    // OPTIONS
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
        ...headers,
      },
      body: method !== "GET" ? JSON.stringify(data) : null,
      signal,
    };

    // SEND REQUEST
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error: any) {
      if (error.name === "AbortError") {
        console.log("Fetch request was aborted");
      } else {
        throw error;
      }
    } finally {
      this.controller = null;
    }
  };
}

export default new RestAPI();
