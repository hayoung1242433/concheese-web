
export async function getInfoPosts() {
    const response = await fetch(
      "http://swacademy.null0xff.com:8080/api/v1/concert/infoList"
    );
  
    if (!response.ok) {
      throw new Error("getPost에 문제가 생김!");
    }
  
    const body = await response.json();
    console.log("body: ", body);
    return body;
  }

 //  3) 과제 수행을 위해 건드림 
export async function getInfoPosts2(id) {
  const response = await fetch( 
    `http://swacademy.null0xff.com:8080/api/v1/concert/info${id}`
  )
  if(!response.ok) { 
    throw new Error("getPost2에 문제가 생김!")
  }
  const body = await response.json();
  console.log("body : " , body);
  return body;
}
  
  export async function writeInfoPost(formData) {
    console.log(formData);
    
    
    const response = await fetch(
      "http://swacademy.null0xff.com:8080/api/v1/concert/info",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
  
    if (!response.ok) {
      throw new Error("writePost에 문제가 생김");
    }
  
    const body = await response.json();
    console.log(body);
    return body;
  }
  
  export async function updateInfoPost(id, formData) {
    const url = `http://swacademy.null0xff.com:8080/api/v1/concert/info/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
      
    });
  
    if (!response.ok) {
      throw new Error("데이터를 알맞게 보냈는지 확인하세요");
    }
  
    const body = await response.json();
    return body;
  }
  
  export async function deleteInfoPost(id) {
    const response = await fetch(
      EndPoint + `http://swacademy.null0xff.com:8080/api/v1/concert/info/${id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("error");
    }
  
  }
  