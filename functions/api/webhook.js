export async function onRequest(context) {
    const { request } = context;
    
    // 요청 데이터 로깅 (SSRF/XSS 수집용)
    const log = {
      method: request.method,
      url: request.url,
      headers: Object.fromEntries(request.headers),
      body: request.method === "POST" ? await request.text() : null
    };
  
    console.log("Captured:", log);
  
    return new Response(JSON.stringify({ status: "captured", time: new Date() }), {
      headers: { "content-type": "application/json", "Access-Control-Allow-Origin": "*" }
    });
  }